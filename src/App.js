import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Menu from './Navbar';
import Slide from './Slide';
import Card from './Card';
import Kartu from './Kartu';
import Kartu2 from './Kartu2';
import Kartu3 from './Kartu3';
import About from './About';
import Footer from './Footer';
import Download from './download';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="cour">
          <Slide />
        </div>
        <Download />
        <center>
          <div className="cont">
            <div className="contrainer">
              <div class="soon">
                <div className="tx">
                  <h1><b>Editor's Choices</b></h1>
                </div>
              </div>
              <Card /><br/>
            </div>
          </div>
          <div className="cont2">
            <div className="contrainer2">
              <div class="see">
                <div className="text">
                  <h1><b>New Releases</b></h1>
                </div>
                <div className="menu1">
                  <a href="">See All ></a>
                </div>
              </div>
              <Kartu />
            </div>
          </div>
          <div className="cont0">
            <div className="contrainer">
              <div class="soon">
                <div className="tx">
                  <h1><b>Coming Soon</b></h1>
                </div>
              </div>
              <Kartu2 /><br/>
            </div>
          </div>
          <div className="cont3">
            <div className="contrainer2">
              <div class="see">
                <div className="text">
                  <h1>CIAYO Comics Challenge</h1>
                </div>
                <div className="menu1">
                  <a href="">See All ></a>
                </div>
              </div>
              <Kartu3 />
            </div>
          </div>
          <div className="cont4"></div>
          <div className="cont2">
            <div className="contrainer2">
              <About />
            </div>
          </div>
          <div className="foot">
              <Footer /><br/>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
