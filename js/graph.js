
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

    const cy = cytoscape({
        container: document.getElementById("graph"),
        elements,
        style:[
            {
                selector:"node",
                style:{
                    label:"data(id)",
                    "background-color":"#2563eb",
                    "color":"#fff",
                    "shape":"round-rectangle",
                    "padding":"10px",
                    "text-valign":"center",
                    "text-halign":"center",
                    "width":"label",
                    "height":"label"
                }
            },
            {
                selector:"edge",
                style:{
                    "width":2,
                    "line-color":"#334155",
                    "curve-style":"bezier"
                }
            }
        ],
        layout:{
            name:"cose",
            fit:true,
            padding:60
        }
    });

    const panel = document.getElementById("content");

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
}

loadData();
