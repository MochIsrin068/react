import React from 'react';
import Logof from './img2/logo-grey.6fd0c09.png';


export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div class="footer">
                    <div className="nav2">
                        <img src={Logof} alt={Logof} className="logof"/><br/>
                        <p>Copyright 2018 CIAYO Corp</p>
                    </div>
                    <div className="nav">
                            <a href=""><b>About Us</b></a>
                            <a href=""><b>Terms & Conditions</b></a>
                            <a href=""><b>F.A.Q</b></a>
                            <a href=""><b>Contact Us</b></a>
                    </div>
                    <div className="nav3">
                        <h4><b>Comic Language</b></h4>
                        <a href="" className="eng"><b>ENGLISH</b></a>
                        <a href="" className="ind"><b>INDONESIA</b></a>
                    </div>
                </div>
            </div>
        )
    }
}