import React from 'react'
import tab1 from "../images/tab-1.png";
import  "./tabOne.css";
import {Link} from "react-router-dom";

function TabOne() {
    return (
        <div>
            <div className="container">
                <div className="tab_content">
                    <span>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime </span>
                    
                    <Link to="/choose-plan" className="btn">try it now</Link >
                    <img src={tab1} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default TabOne;
