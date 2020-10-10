import React, { Component } from "react";
import logo from "../svg/logo.svg";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header_container">
        <div className="header_top">
          <Logo src={logo} alt="" />
          <NavLink className="signin_btn" to="/login">
            Sign In
          </NavLink>
        </div>
        <div className="header_content">
          <Title>See what's next.</Title>
          <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME</Subtitle>
          <Link to="/search-page" className="main_offer_btn">
            Try it now <ArrowIcon className="Icon" size={37} />
          </Link>
        </div>
      </HeaderComponent>
    );
  }
}
export default Header;

const Logo = styled.img`
   {
    width: 10rem;
    height: 4.5rem;
    position: absolute;
    justfiy-content: center;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HeaderComponent = styled.div`
.signin_btn {
    right:0;
    margin 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem ;
    font-weight: 400;  
    line-height:normal ; 
    border-radius: 0.875rem ; 
    font-size :1rem ;
    background : var(--main-red); 
    position: absolute ; 
    translate: transform(-50% , -%50);
    cursor : pointer ; 
    transition:  background 0.2s easy-in ; 
    color: #fff ;
    &:hover{
        background: var(--main-red-hover);
        text-decoration:none; 
    }
    
}
   

.header_top {
    position : relative ;
    height :10rem;
    z-index : 1;
}

.header_content{
    width : 65%;
    position:relative;
    margin:4.5em auto 0;
    display:flex;
    justify-content:center;
    align-content : center ; 
    text-align : center ;
    flex-direction :column ;
    z-index:1;

}

.main_offer_btn{
    display:inline-block ;
    background:var(--main-red);
    text-transform:uppercase ;
    border:none ;
    outline: none;
    margin: 0 26.5%;
    padding:1.5rem;
    border-radius:0.1875rem ;
    font-size: 2rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: 0.2s ease-in;
    cursor: pointer;
    color:  #fff ;
    width : 400px;
    height: 80px;
    text-transform : inherit;
    &:hover{
        background:var(--main-red-hover);
        text-decoration :none ;
    }
   
   
      
   
}
.Icon svg{
    vertical-align:bottom;
    margin-left:1.5rem; 
    
}
`;

const Title = styled.h1`
  margin: 0 0 1.875rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1rem;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
`;
