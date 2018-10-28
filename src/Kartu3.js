import React from 'react';
import Komik1 from './img2/thumbnail_1530105087G32J7xxV0E.jpg';
import Komik2 from './img2/1536051432-cover_coming_soon_new_season-300x300-4-n.jpg';
import Komik3 from './img2/thumbnail_1528619052DZTIsOxvMJ.jpg';
import Komik4 from './img2/thumbnail_1529551100Bpcx79y9jA.jpg';
import Komik5 from './img2/thumbnail_1529901189xx4OvpMker.jpg'; 
import Komik6 from './img2/thumbnail_1531502102WQoPgYWoED.jpg';
import Komik7 from './img2/1538367357-cover.jpg';
import Komik8 from './img2/1536293306-ktf.jpg';
import Komik9 from './img2/1540286799-cover_300x300.jpg';
import Komik10 from './img2/1536225477-banner-editor-choice-desktop-688x352-ps2.jpg';

export default class Kartu3 extends React.Component{
    render(){
        return(
            <div>
                <div class="flex-container2">
                    <div>
                        <img src={Komik1} alt={Komik1} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik2} alt={Komik2} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik3} alt={Komik3} className="gkomik1"/>
                    </div> 
                    <div>
                        <img src={Komik4} alt={Komik4} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik5} alt={Komik5} className="gkomik1"/>
                    </div>
                </div>
                <div class="flex-container2">
                    <div>
                        <img src={Komik6} alt={Komik6} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik7} alt={Komik7} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik8} alt={Komik8} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik9} alt={Komik9} className="gkomik1"/>
                    </div>
                    <div>
                        <img src={Komik10} alt={Komik10} className="gkomik1"/>
                    </div> 
                </div>
            </div>
        )
    }
}