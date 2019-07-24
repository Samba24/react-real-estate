import React, {Component,Fragment} from 'react';
import DisplayComponent from "../DisplayComponent/DisplayComponent";
import {BienFormData} from "../../utils/formData";
import BienService from "../../services/BienService";
import BailleurService from "../../services/BailleurService";
import stable from "../../const";
import PropTypes from 'prop-types';

class BienComponent extends Component {
  constructor(props){
    super(props);
    this.service = new BienService();
    this.bailleurService = new BailleurService;
    this.bailleurService.getBailleurs().then(result=>{
      BienFormData.bailleur.data = result.data
    })
    this.columns = [
      {
          key: "libelle",
          text: "Libellé",
          className: "heading",
          align: "left",
          sortable: true,
      },
      {
          key: "prix",
          text: "Location (par mois)",
          className: "heading",
          align: "left",
          sortable: true
      },
      {
          key: "bailleur",
          text: "Bailleur",
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
        key: "adresse",
        text: "Adresse",
        className: "heading",
        align: "left",
        sortable: true
      },
    ];
    this.state = {
      modal:true,
      id:'',
      libelle : '',
      prix: '',
      bailleur: '',
      adresse: '',
      description: ''
    }
    this.records = this.loadTable()
    // console.log(this.loadTable())
  }

  componentWillMount(){
    this.records = this.loadTable();
  }

  loadTable(){
    let records = [];
    this.service.getBiens().then((result)=>{
      result.data.forEach((element)=>{
        let tableData = {};
        tableData.id = element.idBien
        tableData.libelle = element.libelle;
        tableData.prix = 150000;
        tableData.bailleur = element.nom;
        tableData.adresse  = element.adresse;
        tableData.disponible = element.etat;
        tableData.description = element.description;
        records.push(tableData);
      })
    });
    return records
  }

  reloadTable(){
    console.log("Hitted")
    this.forceUpdate()
  }

  render(){
    return (
      <div className="BienComponent">
        <DisplayComponent
          target   ="biens"
          formData = {BienFormData}
          modalAddTitle  = "Ajouter un bien"
          modalEditTitle = "Modifier un bien"
          initialState   = {this.state}
          badged = {true}
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
BienComponent.propTypes = {
}

export default BienComponent;