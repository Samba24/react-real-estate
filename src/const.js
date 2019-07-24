const stable = {
    API_URL : "http://localhost:8080/M1GLIMMO",
    tableConfig : {
        page_size: 10,
        length_menu: [ 10, 20, 50 ],
        button: {
            excel: true,
            print: true
        },
        language: {
            length_menu: "_MENU_",
            filter: "Filtrer...",
            info: "_START_ a _END_ sur _TOTAL_ entrée(s)",
            pagination: {
                first: "<<",
                previous: "Précédent",
                next: "Suivant",
                last: ">>"
            }
        }
    }
}
export default stable;
