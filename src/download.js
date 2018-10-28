import React from 'react';
import Appstore from './img2/btn-appstore-download.474f920.png';
import Playsore from './img2/btn-playstore-download.168f5f7.png';
import Apps from './img2/download-apps-desktop.jpg';


export default class Download extends React.Component{
    render(){
        return(
            <div>
                <div class="download">
                    <div className="d1">
                        <h2>Bring Your Comics in your pocket.</h2>
                    </div>
                    <div className="d2">
                        <a href=""><img src={Appstore} alt={Appstore} className="appstore"/></a>
                        <a href=""><img src={Playsore} alt={Playsore} className="playstore"/></a>
                    </div>
                    <div className="d3">
                        <img src={Apps} alt={Apps} className="apps"/>
                    </div>
                </div>
            </div>
        )
    }
}