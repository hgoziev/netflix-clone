import React from 'react'
import "./tabTwo.css";
import {Link} from "react-router-dom"; 
import tab3 from "../images/tab-macbook.png";
import tab1 from "../images/tab-tv.png";
import tab2 from "../images/tab3.png";
function TabTwo() {
    return (
        <div className="tab2_content">
            <div className="tab2_top">
                <span>Watch TV shows and movies anytime , anywhere - personalized for you.</span>
                 <Link className="btn2" to="/choose-plan">Try it now</Link>
            </div>
            <div className="tab2_bottom">
               <div>
                   <img src={tab1} alt="" style ={{ width:"18rem"}}/>
                   <h3>Watch on your TV</h3>
                   <p style={{color:"rgba(153, 153, 153"}}>Smart TVs , PlayStation , Xbox, Chromecast , Apple TV , Blu-ray players and more.</p>
               </div>

               <div>
                   <img src={tab2} alt="" style={{width:"18rem" , paddingTop:"0.6rem" , paddingBottom:"0.6rem"}} />
                   <h3>Watch on your TV</h3>
                   <p style={{color:"rgba(153, 153, 153"}}>Smart TVs , PlayStation , Xbox, Chromecast , Apple TV , Blu-ray players and more.</p>
                 
               </div>
               <div>
                   <img src={tab3} alt="" style={{width:"18rem", paddingTop:"0.6rem", paddingBottom:"0.6rem"}}/>
                   <h3>Watch on your TV</h3>
                   <p style={{color:"rgba(153, 153, 153"}}>Smart TVs , PlayStation , Xbox, Chromecast , Apple TV , Blu-ray players and more.</p>
                 
               </div>
            </div>

        </div>
    )
}

export default TabTwo
