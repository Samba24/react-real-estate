import React, { Component } from "react";
import "./LoginComponent.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import UserService from "../../services/UserService";

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login : '',
			password : ''
    }
    this._userService = new UserService();
	}

	auth = () => {
		this._userService.auth(this.state).then((response)=>{
      if(response){
        sessionStorage.setItem('token',response.token)
        this.props.history.push('/dashboard');
      }
    })
	}

	handleChange = (event) =>{
		this.setState({
			[event.target.name] : event.target.value
		}) 
	}

	render() {
		return (
			<div className="LoginComponent">
				{/* <h3 class="text-center mt-4">Welcome to Master real estate</h3> */}
				<div class="container h-100">
					<div class="d-flex justify-content-center h-100">
						<div class="user_card">
							<div class="d-flex justify-content-center">
								<div class="brand_logo_container">
									<h6 class="text-white mt-2">Login</h6>
									{/* <i class="fa fa-home"></i> */}
									{/* <img src={logo} class="brand_logo" alt="Logo" /> */}
								</div>
							</div>
							<div class="d-flex justify-content-center form_container">
								<form>
									<div class="input-group mb-3">
										<div class="input-group-append">
											<span class="input-group-text">
												<i class="fa fa-user" />
											</span>
										</div>
										<input
											type="text"
											name="login"
											onChange={this.handleChange}
											class="form-control input_user"
											placeholder="Login"
										/>
									</div>
									<div class="input-group mb-2">
										<div class="input-group-append">
											<span class="input-group-text">
												<i class="fa fa-key" />
											</span>
										</div>
										<input
											type="password"
											name="password"
											onChange={this.handleChange}
											class="form-control input_pass"
											placeholder="Mot de passe"
										/>
									</div>
									<div class="form-group">
										<div class="custom-control custom-checkbox">
											{/* <input type="checkbox" class="custom-control-input" id="customControlInline"> */}
											{/* <label class="custom-control-label" for="customControlInline">Remember me</label> */}
										</div>
									</div>
								</form>
							</div>
							<div class="d-flex justify-content-center mt-3 login_container">
								<button
									type="submit"
									name="button"
									class="btn login_btn"
									onClick={this.auth}
								>
									Se connecter
                </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default LoginComponent;
