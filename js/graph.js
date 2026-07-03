const cy = cytoscape({

    container: document.getElementById("graph"),

    elements: [

        { data:{ id:"bewerten"} },

        { data:{ id:"beurteilen"} },

        { data:{ id:"einschätzen"} },

        { data:{ id:"einstufen"} },

        { data:{ id:"klassifizieren"} },

        { data:{ source:"bewerten", target:"beurteilen"} },

        { data:{ source:"bewerten", target:"einschätzen"} },

        { data:{ source:"bewerten", target:"einstufen"} },

        { data:{ source:"einstufen", target:"klassifizieren"} }

    ],

    style:[

        {

            selector:"node",

            style:{

                "label":"data(id)",

                "text-valign":"center",

                "text-halign":"center",

                "background-color":"#1976d2",

                "color":"white",

                "font-size":"16px"

            }

        },

        {

            selector:"edge",

            style:{

                "width":2

            }

        }

    ],

    layout:{

        name:"cose"

    }

});
