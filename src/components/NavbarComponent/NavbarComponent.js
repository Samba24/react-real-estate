import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NavbarComponent">
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand mr-3" href="#">
            Real Estate
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  <i class="fa fa-city mr-2" />
                  Biens
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/dashboard/locations">
                  <i class="fa fa-key mr-2"/>
                  Locations
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/dashboard/paiements">
                  <i class="fa fa-money-bill-wave mr-2"/>
                  Paiements
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/dashboard/bailleurs">
                  <i class="fa fa-users mr-2"/>
                  Bailleurs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/clients">
                    <i class="fa fa-user mr-2"/>
                    Clients
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Rechercher un bien"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Rechercher
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
NavbarComponent.propTypes = {};

export default NavbarComponent;
