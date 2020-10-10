import React, { Component } from 'react'
import logo from "../svg/logo.svg";
import "../css/login.css";
import LoginForm from "../components/Login/LoginForm";
import LoginFooter from "../components/Login/LoginFooter"; 
import {Link} from "react-router-dom"; 
class Login extends Component {
    render() {
        return (
            <div className="main_login_container">
                <div className="header_top">
                    <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        )
    }
}


export default Login; 