import React from 'react';
import gc1 from './img2/1540458797-cover_coming_soon_new_season-300x300-hs2.jpg';
import gc2 from './img2/1540275765-cover_coming_soon-300x300.jpg';
import gc3 from './img2/1540281838-cover_coming_soon-300x300.jpg';
import gc4 from './img2/1540380026-cover_coming_soon_new_season-300x300-3-bd.jpg';
import jc1 from './img2/j1.png';
import jc2 from './img2/j2.png';
import jc3 from './img2/j3.png';
import jc4 from './img2/j4.png';
import jc5 from './img2/j5.png';


export default class Kartu2 extends React.Component{
    render(){
        return(
            <div>
                <div class="flex-container01">
                    <div className="glj">
                        <div className="gc1">
                            <img src={gc1} alt={gc1}/>
                        </div>
                        <div className="lc1">
                            <h5><b>Horror</b></h5>
                            <h3><b>Hitam</b></h3>
                            <h4>Hitam akan membuat suasana semakin mencekam</h4>
                        </div>
                        <div className="jc1">
                            <img src={jc1} alt={jc1}/>
                        </div>
                    </div>
                    <div className="glj">
                        <div className="gc1">
                            <img src={gc2} alt={gc2}/>
                        </div>
                        <div className="lc1">
                            <h5><b>Drama</b></h5>
                            <h3><b>Yeah</b></h3>
                            <h4>Yeah dapat gebetan baru, eh dia malu - malu</h4>
                        </div>
                        <div className="jc1">
                            <img src={jc2} alt={jc2}/>
                        </div>
                    </div>
                </div>
                <div class="flex-container01">
                    <div className="glj">
                        <div className="gc1">
                            <img src={gc3} alt={gc3}/>
                        </div>
                        <div className="lc1">
                            <h5><b>Drama</b></h5>
                            <h3><b>Tampan</b></h3>
                            <h4>Si tampan yang banyak direbutkan para wanita</h4>
                        </div>
                        <div className="jc1">
                            <img src={jc3} alt={jc3}/>
                        </div>
                    </div>
                    <div className="glj">
                        <div className="gc1">
                            <img src={gc4} alt={gc4}/>
                        </div>
                        <div className="lc1">
                            <h5><b>Action-Drama</b></h5>
                            <h3><b>BeatDown</b></h3>
                            <h4>Seorang Bounty Hunter yang bertekad menciptakan keadilan</h4>
                        </div>
                        <div className="jc1">
                            <img src={jc4} alt={jc4}/>
                        </div>
                    </div>
                </div>
                <div class="flex-container0">
                    <div className="glj">
                        <div className="gc1">
                            <img src={gc1} alt={gc1}/>
                        </div>
                        <div className="lc1">
                            <h5><b>Horror</b></h5>
                            <h3><b>Hitam</b></h3>
                            <h4>Hitam akan membuat suasana semakin mencekam</h4>
                        </div>
                        <div className="jc1">
                            <img src={jc5} alt={jc5}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}