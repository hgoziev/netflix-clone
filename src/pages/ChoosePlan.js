import React from "react";
import logo from "../svg/logo.svg";
import { Link } from "react-router-dom";
import "../css/choosePlan.css";
import styled from "styled-components";
import checkmark from "../images/Checkmark.png";
import ChooseFooter from "../components/chooseFooter/chooseFooter";

const ChoosePlan = () => {
  return (
    <MainContainer>
      <div className="header_top">
        <Link to="/">
          <img className="logos" src={logo} alt="" />
        </Link>

        <Link to="/login" className="side_signbtn">
          Sign In
        </Link>
      </div>

      <div className="header-content">
        <img className="checkmark-logo" src={checkmark} alt="" />
        <p>
          Step <strong>1</strong> of <strong>3</strong>
        </p>
        <h2 style={{ fontSize: "1.7rem" }}>Choose your plan.</h2>

        <div className="checked-list">
          <div className="bullet" style={{ paddingLeft: "9.85px" }}>
            No commitments,cancel anytime.
          </div>
          <div className="bullet" style={{ paddingLeft: "8.85px" }}>
            Everything on Netlfix is for one low price.
          </div>
          <div className="bullet" style={{ paddingLeft: "7.85px" }}>
            Unlimited viewing on all your devices{" "}
          </div>
        </div>
        <Link className="Button" to="/login">
          See the Plans
        </Link>
      </div>
      <ChooseFooter />
    </MainContainer>
  );
};

export default ChoosePlan;

const MainContainer = styled.div`
  background: #fff;
  .header_top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
  }
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-direction: column;
    z-index: 2;
  }
  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }
  .logos {
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 46%;
    left: 9%;
    transform: translate(-50%, -50%);
    margin-right: 10px;
  }

  .checked-list {
    text-align: left;
    margin-left: 0.2rem;
    padding-left: 4.7625rem;
    width: 85%;
    font-size: 17px;
    padding: auto;
    padding-bottom: 1rem;
  }
  .bullet {
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: -1rem;
    line-height: 1.59rem;
  }
  .checked-list .bullet::before {
    color: transparent;
    display: inline-block;
    position: relative;
    height: 0.3rem;
    width: 0.8rem;
    content: "";
    left: -0.9375rem;
    bottom: 0.1875rem;
    border-bottom: 1px solid #e50914;
    border-left: 1px solid #e50914;
    transform: rotate(-45deg);
  }

  .side_signbtn {
    margin: 1.5625rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 700;
    line-height: normal;
    font-size: 1.25rem;
    color: var(--main-dark);
    right: 0;
    position: absolute;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
