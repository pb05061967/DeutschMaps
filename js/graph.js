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
                "label": "data(id)",

                "color": "#ffffff",
                "background-color": "#2563eb",

                "text-valign": "center",
                "text-halign": "center",

                "width": "label",
                "height": "label",
                "padding": "10px",

                "shape": "round-rectangle",

                "font-size": "12px",

                "text-wrap": "wrap",
                "text-max-width": 120
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
        padding: 40
    }
});
