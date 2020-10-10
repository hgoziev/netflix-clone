import React , {Component} from 'react'
import { Link } from "react-router-dom";
//import styled from "styled-components";
import "./chooseFooter.css" ;
import styled from 'styled-components';

class ChooseFooter extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render()
    {
        return (
            <FootContainer> 
                 <div className="footer_container">
                        <span style={{ marginLeft: "7%", fontSize: "1rem", color: "#999" }}>Questions ?  <Link >Contact us</Link></span>
                        <div className="footer_columns">
                            <ul>
                                <li>
                                    <Link>Gift Card Terms</Link>
                                </li>
                            </ul>
    
                            <ul>
                                <li>
                                    <Link>Terms of use</Link>
                                </li>
                            </ul>
    
                            <ul>
                                <li>
                                    <Link>Privacy Statement</Link>
                                </li>
    
                            </ul>
                        </div> 
                        </div>
                        
                       </FootContainer>
           
        )
    }
    
}
export default ChooseFooter;

const FootContainer =styled.footer`

    display:grid;
    justify-content : center ;
    background:#f3f3f3 !important;
    padding: 1.875rem 0;
   
    position:relative ;
    z-index:500;
    margin-top:10rem;
    border-top:1px solid #e6e6e6 ;
   

.footer_columns{
    width: 80%;
    margin: 1rem 3rem 0  3rem;
    color:#999; 
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-gap: 0.3rem;
}

.footer_container{
    margin: 0 auto ;
    padding:1.25rem ;
    background:#ededed ;
}

.footer_container >span:hover{
   text-decoration: underline;
   cursor: pointer;
}
`