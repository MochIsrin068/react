import React from 'react';
import Editor1 from './img2/editor1.png';
import Editor2 from './img2/editor2 copy.png';
import Editor3 from './img2/editor3.png';


export default class Card extends React.Component{
    render(){
        return(
          <div class="flex-container">
            <div>
              <a href=""><img src={Editor1} alt={Editor1} className="gc"/></a>
            </div>
            <div>
              <a href=""><img src={Editor2} alt={Editor2} className="gc"/></a>
            </div>
            <div>
              <a href=""><img src={Editor3} alt={Editor3} className="gc"/></a>             
            </div>  
          </div>
        )
    }
}