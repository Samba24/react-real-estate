import React, {Component} from 'react';
import {BailleurFormData} from '../../utils/formData';
import BailleurService from "../../services/BailleurService";
import DisplayComponent from "../DisplayComponent/DisplayComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import stable from "../../const";
import PropTypes from 'prop-types';

class BailleurComponent extends Component {
  constructor(props){
    super(props);
    this.service = new BailleurService;
    this.service.getTypes().then(result=>{
      BailleurFormData.type.data = result.data
    })
    this.columns = [
      {
          key: "nom",
          text: "Nom",
          className: "heading",
          align: "left",
          sortable: true,
      },
      {
        key: "cni",
        text: "ID",
        className: "heading",
        align: "left",
        sortable: true,
      },
      {
          key: "tel",
          text: "Téléphone",
          className: "heading",
          align: "left",
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
      {
        key: "type",
        text: "Type",
        className: "heading",
        align: "left",
        sortable: true
      }
    ];
    this.records = this.loadTable();
    this.state = {
      id:'',
      cni:'',
      nom : '',
      tel: '',
      adresse : '',
      email : '',
      type : ''
    }
  }

  loadTable(){
    let records = [];
    this.service.getBailleurs().then((result)=>{
      result.data.forEach((element)=>{
        let tableData = {};
        tableData.id = element.id
        tableData.nom = element.nom;
        tableData.tel = element.tel;
        tableData.adresse = element.adresse;
        tableData.email = element.email;
        tableData.type  = element.type.libelle;
        records.push(tableData);
      })
    });
    return records
  }

  render(){
    return (
      <div className="BailleurComponent">
        <NavbarComponent className="nav-component"></NavbarComponent>
          <DisplayComponent
          target     = "bailleurs"
          modalAddTitle = "Ajouter un bailleur"
          modalEditTitle= "Modifier un bailleur"
          formData   = {BailleurFormData}
          service    = {this.service}
          initialState = {this.state}
          callback   = "toast"
          state      = {this.state}
          config     = {stable.tableConfig}
          records    = {this.records}
          columns    = {this.columns}
        />
      </div>
    )
  }
}
BailleurComponent.propTypes = {
}

export default BailleurComponent;