var BienFormData = {
    libelle  : {
        type : "text",
        placeholder : "Libellé",
        required: true
    },
    prix     : {
        type : "text",
        placeholder : "Prix",
        required: true
    },
    bailleur : {
        type : "select",
        placeholder : "Bailleur",
        required: true,
        selectPlaceholder : "nom",
        id: "id",
        data : []
    },
    adresse  : {
        type : "text",
        placeholder : "Adresse",
        required: true
    },
    description : {
        type : "textarea",
        placeholder : "Description"
    },
    addUrl: "MainServlet?action=addBien",
    editUrl: "MainServlet?action=editBien",
    deleteUrl: "MainServlet?action=deleteBien"
}
var LocationFormData = {
    client  : {
        placeholder : "Client",
        type : "select",
        required: true,
        selectPlaceholder : "nom",
        id: "id",
        data : [] 
    },
    bien     : {
        placeholder : "Bien",
        type : "select",
        selectPlaceholder : "libelle",
        required: true,
        id:"idBien",
        data : [] 
    },
    prix_bien:{
        placeholder: "Prix du bien",
        type: "text",
        readonly: true,
    },
    adresse:{
        placeholder: "Adresse",
        type: "text",
        readonly: true,
    },
    addUrl: "MainServlet/add",
    editUrl: "MainServlet/edit",
    deleteUrl: "MainServlet/delete"
}
var BailleurFormData = {
    cni : {
        placeholder: "Numéro piéce",
        type: "text",
        required: true
    },
    nom : {
        placeholder : "Nom complet",
        required : true,
        type : 'text'
    },
    adresse : {
        placeholder : "Adresse",
        required : true,
        type : 'text'
    },
    email:{
        placeholder : "Email",
        required : true,
        type : 'text'
    },
    tel : {
        placeholder : "Téléphone",
        required : true,
        type : 'text'
    },
    type: {
        placeholder : "Type",
        required : true,
        selectPlaceholder : "libelle",
        id: "id",
        data : [],
        type : 'select'
    },
    addUrl: "MainServlet?action=addBailleur",
    editUrl: "MainServlet?action=editBailleur",
    deleteUrl: "MainServlet?action=deleteBailleur"

}
var PaiementFormData = {
    bien : {
        placeholder : "Bien",
        required : true,
        type : 'select',
        id: "idBien",
        selectPlaceholder : "libelle",
        data: []
    },
    prix_bien : {
        placeholder : "Montant de la location",
        readonly: true,
        type : 'text'
    },
    adresse : {
        placeholder : "Adresse",
        readonly: true,
        type : 'text'
    },
    montant: {
        placeholder : "Montant du versement",
        required : true,
        type : 'text'
    },
    mois:{
        placeholder: "Mois",
        required: true,
        id: "id",
        selectPlaceholder : "text",
        type: "select",
        data: [
            {
                id: 1,
                text:"Janvier"
            },
            {
                id: 2,
                text:"Février"
            },
            {
                id: 3,
                text:"Mars"
            },
            {
                id: 4,
                text:"Avril"
            },
            {
                id: 5,
                text:"Mai"
            },
            {
                id: 6,
                text:"Juin"
            },
            {
                id: 7,
                text:"Juillet"
            },
            {
                id: 8,
                text:"Aout"
            },
            {
                id: 9,
                text:"Septembre"
            },
            {
                id: 10,
                text:"Octobre"
            },
            {
                id: 11,
                text:"Novembre"
            },
            {
                id: 12,
                text:"Décembre"
            }

        ]
    },
    mode:{
        placeholder: "Mode de paiement",
        type: "select",
        required: true,
        data : [
            {
                id: 1,
                text: "Chéque"
            },
            {
                id: 2,
                text: "Comptant"
            }
        ],
        selectPlaceholder: "text",
        id : "id"

    },
    addUrl: "MainServlet?action=addPaiement",
    editUrl: "MainServlet?action=edit",
    deleteUrl: "MainServlet?action=delete"
}
var ClientFormData = {
    nom : {
        placeholder : "Nom complet",
        required : true,
        type : 'text',
    },
    cni : {
        placeholder : "Numéro piéce",
        type : 'text'
    },
    tel : {
        placeholder : "Téléphone",
        type : 'text'
    },
    adresse: {
        placeholder : "Adresse",
        required : true,
        type : 'text'
    },
    email: {
        placeholder : "Email",
        required : true,
        type : 'text'
    },
    addUrl: "MainServlet?action=addClient",
    editUrl: "MainServlet?action=editClient",
    deleteUrl: "MainServlet?action=delete"
}
export{
    BienFormData,
    LocationFormData,
    BailleurFormData,
    PaiementFormData,
    ClientFormData
}

