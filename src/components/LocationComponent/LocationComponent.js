import React, {Component} from 'react';
import {LocationFormData} from '../../utils/formData';
import ClientService from "../../services/ClientService";
import LocationService from "../../services/LocationService";
import DisplayComponent from "../DisplayComponent/DisplayComponent";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import stable from "../../const";
import PropTypes from 'prop-types';
import BienService from '../../services/BienService';

class LocationComponent extends Component {
  constructor(props){
    super(props);
    this.columns = [
      {
          key: "client",
          text: "Client",
          className: "heading",
          align: "left",
          sortable: true,
      },
      {
          key: "bien",
          text: "Bien",
          className: "heading",
          align: "left",
          sortable: true
      },
      {
        key: "date",
        text: "Date début de location",
        className: "heading",
        align: "left",
        sortable: true
      }
    ];
    this.records = [
      {
        "id" : "1",
        "client" : "Junior Njay",
        "bien" : "Studio 2x piéces",
        "date" : "10/07/2019",
      }
    ]
    this.state = {
      id:'',
      client : '',
      bien: '',
      prix_bien: '',
      adresse:'',
    }
    this.service = new LocationService();
    this.bienService = new BienService();
    this.clientService = new ClientService()
    this.bienService.getBiens().then(result=>{
      LocationFormData.bien.data = result.data
    })
    this.clientService.getClients().then(result=>{
      LocationFormData.client.data = result.data
    })
  }
  render(){
    return (
      <div className="LocationComponent">
          <NavbarComponent className="nav-component"></NavbarComponent>
          <DisplayComponent
          target     = "locations"
          modalAddTitle = "Ajouter une location"
          modalEditTitle= "Modifier une location"
          formData   = {LocationFormData}
          service    = {new LocationService()}
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
LocationComponent.propTypes = {
}

export default LocationComponent;