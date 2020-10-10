import React from 'react'
import "./tabThree.css";
import {Link } from "react-router-dom"; 
import {Icon} from "react-icons-kit"; 
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import {cross} from 'react-icons-kit/icomoon/cross';


function TabThree() {
    return (
        <div className="all">
            <div className="contents">
                <div className="contents_top">
                    <span>Choose one plan and watch everything on Netflix</span>
                    <Link className="top_btn" to="/login"> Try it now</Link>
                </div>
                <div className="contents_bottom">
                    <table>
                        <thead>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD availabe</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD availabe</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>

                            <tr>
                                <td>Screens you can watch at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            
                            <tr>
                                <td>Watch on your laptop, TV, phone, Tablet </td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default TabThree; 
