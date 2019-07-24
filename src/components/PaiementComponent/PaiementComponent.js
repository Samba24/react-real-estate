import React, {Component} from 'react';
import stable from "../../const";
import {PaiementFormData} from '../../utils/formData';
import PaiementService from "../../services/PaiementService";
import DisplayComponent from "../DisplayComponent/DisplayComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import PropTypes from 'prop-types';
import BienService from '../../services/BienService';

class PaiementComponent extends Component {
  constructor(props){
    super(props);
    this.columns = [
      {
          key: "bien",
          text: "Bien",
          className: "heading",
          align: "left",
          sortable: true,
      },
      {
          key: "montant",
          text: "Montant payé (CFA)",
          className: "heading",
          align: "left",
          sortable: true
      },
      {
        key: "mois",
        text: "Mois",
        className: "heading",
        align: "left",
        sortable: true
      },
      {
        key: "datepaie",
        text: "Date de paiement",
        className: "heading",
        align: "left",
        sortable: true
      }
    ];
    this.state = {
      id:'',
      bien : '',
      prix_bien: '',
      montant:'',
      adresse:'',
      mois: '',
      modal: true,
      mode: '',
      date:'',
    }
    this.service = new PaiementService()
    this.bienService = new BienService();
    this.records = this.loadTable();
    this.bienService.getBiens().then(result=>{
      PaiementFormData.bien.data = result.data
    })
  }

  loadTable(){
    let records = [];
    this.service.getPaiements().then((result)=>{
      result.data.forEach((element)=>{
        let tableData = {};
        tableData.id = element.id
        tableData.bien = element.bien.libelle
        tableData.montant = element.montant;
        tableData.datepaie = element.datepaie;
        tableData.mois = element.mois;
        records.push(tableData);
      })
    });
    return records
  }

  render(){
    return (
      <div className="PaiementComponent">
        <NavbarComponent className="nav-component"></NavbarComponent>
          <DisplayComponent
          target     = "versements"
          modalAddTitle = "Ajouter un versement"
          modalEditTitle= "Modifier un versement"
          formData   = {PaiementFormData}
          service    = {this.service}
          initialState = {this.state}
          callback   = "window"
          state      = {this.state}
          config     = {stable.tableConfig}
          records    = {this.records}
          columns    = {this.columns}
        />
      </div>
    )
  }
}
PaiementComponent.propTypes = {
}

export default PaiementComponent;