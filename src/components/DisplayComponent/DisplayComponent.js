import React, { Component,Fragment} from "react";
import "./DisplayComponent.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactDatatable from "@ashvin27/react-datatable";
import buildForm from "../../utils/FormBuilder";
import {serializeObject} from '../../utils/Serializer'
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import BienService from "../../services/BienService";

class DisplayComponent extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.state
    this.state.modal = false;
    if(this.props.badged){
      this.props.columns.push({
        key: "disponible",
        text: "Disponibilité",
        className: "heading",
        width: 100,
        align: "left",
        sortable: true,
        cell: record => { 
            return (
                <Fragment>
                    {record.disponible == 0 ?<span class="badge badge-pill badge-danger">Occupé</span>:<span class="badge badge-pill badge-success">Disponible</span>}
                </Fragment>
            );
        }
      })
    }
    this.props.columns.push(
      {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => { 
            return (
                <Fragment>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => this.toggleModalEdit(record)}
                        style={{marginRight: '5px'}}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => this.handleDelete(record)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
            );
        }
      }
    )
  }

  componentDidMount(){
    // this.setState(this.state)
  }

  toggleModal = () => {
    this.setState(this.props.initialState);
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    this.props.service.add(this.state).then((result)=>{
      if(result.status == 200){
        if(this.props.callback != "toast"){
          let params = serializeObject(this.state);
          window.open(`http://localhost:3000/receipt/${params}`,'_blank','height=500,width=800,left=50%,top=50%,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no')
        }else{
          cogoToast.success(
            <h5>Enregistrement réussi</h5>
          ,{position:"bottom-right"})
          this.setState({
            modal: false
          })
          this.props.reloadTable();
        }
      }else{
        cogoToast.error(
          <h5>Echec de l'opération</h5>
        ,{position:"bottom-right"})
      }
    });
  }

  handleEdit = (event) => {
    event.preventDefault();
    this.props.service.edit(this.state).then((result)=>{
      if(result.status == 200){
        if(this.props.callback != "toast"){
          let params = serializeObject(this.state);
          window.open(`http://localhost:3000/receipt/${params}`,'_blank','height=500,width=800,left=50%,top=50%,resizable=no,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no')
        }else{
          cogoToast.success(
            <h5>Modification réussie</h5>
          ,{position:"bottom-right"})
          this.setState({
            modal: false
          })
          this.props.reloadTable();
        }
      }else{
        cogoToast.error(
          <h5>Echec de l'opération</h5>
        ,{position:"bottom-right"})
      }
    });
  }

  handleDelete = (record) => {
    this.setState(record);
    this.props.service.delete(this.state);
  }

  handleChange = (event) => {
    this.setState({
			[event.target.name] : event.target.value
    })
    if(event.target.name == "mois"){
      this.setState({
        mois: event.target.options[event.target.selectedIndex].text
      })
    }
    if(event.target.name == "bien"){
      let bienService = new BienService();
      bienService.findById(event.nativeEvent.target[event.nativeEvent.target.selectedIndex].value).then(result=>{
        if(result.status == 200){
          this.setState({
            prix_bien: result.data.montant,
            adresse: result.data.adresse,
            libelle_bien : result.data.libelle
          })
        }
      })
    }
  }

  toggleModalEdit(record) {
    this.setState(record);
    this.setState({
			modal : true
    })
  }

  render() {
    return (
      <div className="DisplayComponent">
        <div className="container mt-5">
          <u><h2 className="text-center mb-3">Liste des {this.props.target}</h2></u>
          <button className="btn btn-success mb-3 btn-flat" onClick={this.toggleModal}>
            <i className="fa fa-plus-circle mr-2" />
            Ajouter
          </button>
          <ReactDatatable
            config={this.props.config}
            records={this.props.records}
            columns={this.props.columns}
          />
        </div>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.state.id == "" ? this.handleAdd : this.handleEdit}>
            {this.state.id == "" 
              ?<ModalHeader>{this.props.modalAddTitle}</ModalHeader>
              :<ModalHeader>{this.props.modalEditTitle}</ModalHeader>
            }
            <ModalBody>
              {buildForm(this.props.formData,this.handleChange,this.state)}
            </ModalBody>
            <ModalFooter>
              <input
                type="submit"
                value="Enregistrer"
                color="primary"
                className="btn btn-flat btn-success"
              />
              <Button color="danger" onClick={this.toggleModal} className="btn-flat">
                Fermer
              </Button>
            </ModalFooter>
          </form>
        </Modal>        
      </div>
    );
  }
}
DisplayComponent.propTypes = {};

export default DisplayComponent;
