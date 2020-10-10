import React, { Component } from "react";
import "./loginform.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fblogo from "../../images/fb-logo.png";

// eslint-disable-next-line
const regexp = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const initState = {
  checked: true,
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class LoginForm extends Component {
  state = initState;
  handleEmail = (props) => {
    this.setState({ email: props.target.value });
  };

  handlePassword = (props) => {
    this.setState({ password: props.target.value });
  };

  validate = () => {
    let inputError = false;
    const errors = {
      emailError: "",
      passwordError: "",
    };

    if (!this.state.email) {
      inputError = true;
      errors.emailError = "Please enter a valid email";
    } else if (!this.state.email.match(regexp)) {
      inputError = true;
      errors.emailError = (
        <span style={{ color: "red" }}>
          "Your email address must be valid"{" "}
        </span>
      );
    }
    if (this.state.password.length < 4) {
      inputError = true;
      errors.passwordError =
        "Your password must be between 4 and 50 characters";
    }
    this.setState({
      ...errors,
    });
    return inputError;
  };

  onSubmit = (props) => {
    props.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState(initState);
    }
  };

  checkHandler = (props) => {
    this.setState({ checked: props.target.checked });
  };
  render() {
    return (
      <FormContainer>
        <div className="form_container">
          <form>
            <h1>Sign In</h1>
            <div className="input_container">
              <input
                className="input_empty"
                type="email"
                required
                onChange={this.handleEmail}
              />

              <label>Email or phone number</label>
              <span>{this.state.emailError}</span>
            </div>

            <div className="input_container">
              <input
                className="input_empty"
                type="password"
                required
                onChange={this.handlePassword}
              />

              <label>Password</label>
              <span>{this.state.passwordError}</span>
            </div>

            <div className="input_container">
              <a
                className="sbtn"
                onSubmit={(props) => this.onSubmit(props)}
                type="submit"
                href="/search-page"
              >
                Sign In
              </a>
            </div>

            <label className="checkbox_container">
              Remember me
              <input
                type="checkbox"
                defaultChecked={this.state.checked}
                onChange={this.checkHandler}
              />
              <span className="checkmark"></span>
            </label>
            <Link to="/" className="theLink">
              Need Help ?
            </Link>

            <div className="bottom_form">
              <img src={fblogo} alt="facebook" />
              <Link to="/" className="facebook_login">
                Login with Facebook
              </Link>
              <br />
              <br />
              <span style={{ color: "#999", fontSize: "1rem" }}>
                New to Netflix ?
              </span>
              &nbsp;&nbsp;
              <Link className="signup" to="/">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default LoginForm;

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;
`;
