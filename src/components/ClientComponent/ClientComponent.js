import React, {Component} from 'react';
import DisplayComponent from "../DisplayComponent/DisplayComponent";
import ClientService from '../../services/ClientService';
import { ClientFormData } from '../../utils/formData';
import stable from "../../const";
import NavbarComponent from '../NavbarComponent/NavbarComponent';

class ClientComponent extends Component {
  constructor(props){
    super(props);
    this.service = new ClientService();
    this.state = {
      id : '',
      nom: '',
      adresse: '',
      tel: '',
      cni: '',
      email: ''
    }
    this.columns = [
      {
          key: "nom",
          text: "Nom complet",
          className: "heading",
          align: "left",
          sortable: true,
      },
      {
          key: "cni",
          text: "Numéro piéce",
          className: "heading",
          align: "left",
          sortable: true
      },
      {
          key: "tel",
          text: "Téléphone",
          className: "heading",
          sortable: true
      },
      {
          key: "adresse",
          text: "Adresse",
          className: "heading",
          align: "left",
          sortable: true
      },
      {
        key: "email",
        text: "Email",
        className: "heading",
        align: "left",
        sortable: true
    },
    ];
    this.records = this.loadTable()
  }

  reloadTable(){
    this.forceUpdate()
  }

  loadTable(){
    let records = [];
    this.service.getClients().then((result)=>{
      result.data.forEach((element)=>{
        let tableData = {};
        tableData.id = element.id
        tableData.nom = element.nom;
        tableData.adresse = element.adresse;
        tableData.tel = element.tel;
        tableData.cni  = element.cni;
        tableData.email  = element.email;
        records.push(tableData);
      })
    });
    return records
  }

  render(){
    return (
      <div className="ClientComponent">
        <NavbarComponent></NavbarComponent>
        <DisplayComponent
          target   ="clients"
          formData = {ClientFormData}
          modalAddTitle  = "Ajouter un client"
          modalEditTitle = "Modifier un client"
          initialState   = {this.state}
          badged = {false}
          callback = "toast"
          reloadTable = {this.reloadTable}
          service  = {this.service}
          state    = {this.state}
          config   = {stable.tableConfig}
          records  = {this.records}
          columns  = {this.columns}
        />
      </div>
    )
  }
}


export default ClientComponent;