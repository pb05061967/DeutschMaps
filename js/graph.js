window.addEventListener("load", () => {

    console.log("APP STARTED");

    const panel = document.getElementById("content");

    if (!panel) {
        console.error("❌ #content NON TROVATO nel DOM");
    }

    const data = {
        bewerten: { it: "valutare", en: "to evaluate", level: "B2" },
        beurteilen: { it: "giudicare", en: "to judge", level: "B2" },
        einschätzen: { it: "stimare", en: "to assess", level: "B2" },
        einstufen: { it: "classificare", en: "to classify", level: "B2" },
        klassifizieren: { it: "classificare sistematicamente", en: "to classify", level: "B2" }
    };

    const cy = cytoscape({
        container: document.getElementById("graph"),

        elements: [
            { data: { id: "bewerten" } },
            { data: { id: "beurteilen" } },
            { data: { id: "einschätzen" } },
            { data: { id: "einstufen" } },
            { data: { id: "klassifizieren" } },

            { data: { source: "bewerten", target: "beurteilen" } },
            { data: { source: "bewerten", target: "einschätzen" } },
            { data: { source: "bewerten", target: "einstufen" } },
            { data: { source: "einstufen", target: "klassifizieren" } }
        ],

        style: [
            {
                selector: "node",
                style: {
                    label: "data(id)",
                    "background-color": "#2563eb",
                    "color": "#fff",
                    "shape": "round-rectangle",
                    "text-valign": "center",
                    "text-halign": "center",
                    "padding": "10px",
                    "width": "label",
                    "height": "label",
                    "font-size": "12px",
                    "text-wrap": "wrap",
                    "text-max-width": 140
                }
            },
            {
                selector: "edge",
                style: {
                    "width": 2,
                    "line-color": "#334155",
                    "curve-style": "bezier"
                }
            }
        ],

        layout: {
            name: "cose",
            fit: true,
            padding: 80
        }
    });

    // 🔥 TEST ASSOLUTO
    cy.on("tap", "node", (evt) => {

        const id = evt.target.id();

        console.log("CLICK FUNZIONA:", id);

        if (!panel) {
            alert("Pannello non trovato!");
            return;
        }

        const d = data[id];

        panel.innerHTML = `
            <div style="padding:10px;background:#111;border-radius:8px">
                <h2>${id}</h2>
                <p>🇮🇹 ${d?.it ?? "—"}</p>
                <p>🇬🇧 ${d?.en ?? "—"}</p>
                <p>B2 level: ${d?.level ?? "—"}</p>
            </div>
        `;
    });

});
