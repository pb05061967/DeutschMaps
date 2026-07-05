let cy;

async function loadData(){

    const relRes = await fetch("data/relations/relations.json");
    const relations = await relRes.json();

    const nodesSet = new Set();
    relations.forEach(r=>{
        nodesSet.add(r.from);
        nodesSet.add(r.to);
    });

    const elements = [];

    nodesSet.forEach(id=>{
        elements.push({ data:{ id }});
    });

    relations.forEach(r=>{
        elements.push({
            data:{
                source:r.from,
                target:r.to
            }
        });
    });

    cy = cytoscape({
        container: document.getElementById("graph"),
        elements,
        style:[ /* invariato */ ],
        layout:{
            name:"cose",
            fit:true,
            padding:60
        }
    });

    const panel = document.getElementById("content");
    const searchInput = document.getElementById("search");

    cy.on("tap","node", async (evt)=>{
        const id = evt.target.id();
        const res = await fetch(`data/lemmas/${id}.json`);
        const data = await res.json();

        panel.innerHTML = `
            <div class="card">
                <h2>${data.id}</h2>
                <p>🇮🇹 ${data.it}</p>
                <p>🇬🇧 ${data.en}</p>
                <p>Level: ${data.level}</p>
            </div>
        `;
    });

    function resetHighlight() {
        cy.elements().removeClass("dim highlight");
    }

    function highlightNode(node) {
        resetHighlight();

        node.addClass("highlight");
        node.neighborhood().addClass("highlight");

        cy.elements().not(node).not(node.neighborhood()).addClass("dim");

        cy.animate({
            center: { eles: node },
            duration: 600
        });
    }

    searchInput.addEventListener("input", (e) => {

        const value = e.target.value.trim().toLowerCase();

        if (value === "") {
            resetHighlight();
            return;
        }

        const matched = cy.nodes().filter(n =>
            n.id().toLowerCase().includes(value)
        );

        if (matched.length > 0) {
            highlightNode(matched[0]);
        }
    });
}

loadData();
