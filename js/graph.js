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

                "text-valign": "center",
                "text-halign": "center",

                "background-color": "#2563eb",
                "color": "#fff",

                "shape": "round-rectangle",

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
        animate: true,
        animationDuration: 600,
        fit: true,
        padding: 80
    }
});

// 🔥 FIX CRUCIALE: forza centratura dopo rendering
setTimeout(() => {
    cy.fit();
    cy.center();
}, 300);
