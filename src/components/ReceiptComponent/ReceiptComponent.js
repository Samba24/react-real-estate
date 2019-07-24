import React, { Component } from "react";
import PropTypes from "prop-types";
import {deserializeObject} from "../../utils/Serializer"
import { thisExpression } from "@babel/types";

class ReceiptComponent extends Component {
  constructor(props) {
    super(props);
    this.receiptData = deserializeObject(this.props.match.params.data);
  }
  render() {
    return (
      <div className="ReceiptComponent">
        <div className="container">
          <div class="row">
            <div class="well col-xs-10 col-sm-10 col-md-12 col-xs-offset-1 col-sm-offset-1">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <address>
                    <strong>M1 GL Immo</strong>
                  </address>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 text-right">
                  <p>
                    <em>{new Date().toLocaleDateString("fr-FR")}</em>
                  </p>
                  <p>
                    <em className="font-weight-bold">{this.receiptData.client}</em>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="text-center">
                  <h1>Reçu de paiement</h1>
                </div>
                {/* </span> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Bien</th>
                      <th>Adresse</th>
                      <th class="text-center">Montant payé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="col-md-6">
                        <em>{this.receiptData.libelle_bien.toUpperCase()}</em>
                      </td>
                      <td class="col-md-3">{this.receiptData.adresse}</td>
                      <td class="col-md-3 text-center">{this.receiptData.montant} CFA</td>
                    </tr>
                    {
                      this.receiptData.caution 
                      ?
                      <tr>
                        <td class="col-md-6">
                          <em>.......</em>
                        </td>
                        <td class="col-md-3">.......</td>
                        <td class="col-md-3 text-center">{this.receiptData.caution} CFA</td>
                      </tr>
                      : ""
                    }
                    <tr>
                      <td class="col-md-6">
                        <em></em>
                      </td>
                      <td class="col-md-2 font-weight-bold"></td>
                      {
                        this.receiptData.caution 
                        ?
                          <td class="col-md-4 text-center text-danger font-weight-bold"><h4>{eval(this.receiptData.caution+this.receiptData.montant)} CFA</h4></td>
                        : <td class="col-md-4 text-center text-danger font-weight-bold"><h4>{eval(this.receiptData.montant)} CFA</h4></td>
                      }
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h5 className="mt-1">Le bailleur  ......................</h5>
          <button className="mt-2 btn btn-flat btn-primary" onClick={() => { window.print() }}><i className="fa fa-print"></i> Imprimer</button>
        </div>
      </div>
    );
  }
}
ReceiptComponent.propTypes = {};

export default ReceiptComponent;
