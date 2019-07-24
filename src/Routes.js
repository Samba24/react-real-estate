import React from "react";
import DashboardComponent from "./components/DashboardComponent/DashboardComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import ClientComponent from "./components/ClientComponent/ClientComponent";
import LocationComponent from "./components/LocationComponent/LocationComponent";
import BailleurComponent from "./components/BailleurComponent/BailleurComponent";
import ReceiptComponent from "./components/ReceiptComponent/ReceiptComponent";
import PaiementComponent from "./components/PaiementComponent/PaiementComponent";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Routes = (
    <Router>
        <div>
            <Route exact path="/" component={LoginComponent} />
            <PrivateRoute exact path="/dashboard" component={DashboardComponent} />
            <PrivateRoute exact path="/dashboard/locations" component={LocationComponent} />
            <PrivateRoute exact path="/dashboard/bailleurs" component={BailleurComponent} />
            <PrivateRoute exact path="/dashboard/paiements" component={PaiementComponent} />
            <PrivateRoute exact path="/dashboard/clients" component={ClientComponent} />
            <PrivateRoute exact path="/receipt/:data" component={ReceiptComponent} />
        </div>
    </Router>
);

export default Routes;