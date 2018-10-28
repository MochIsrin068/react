import React, { Component } from 'react';
import './App.css';
import Head from './img/h1.png';
import Head2 from './img/h2.png';
import Head3 from './img/h3.png';
import Head4 from './img/h4.png';
import Head5 from './img/h5.png';
import './img/logo-ciayo-comics.gif';
import './img/PASARTA.jpg';

class Slide extends React.Component{
  render(){
    return(
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>


        <div class="carousel-inner">
          <div class="item active">
            <a href=""><img src={Head} alt ={Head}/></a>
          </div>

          <div class="item">
            <a href=""><img src={Head2} alt ={Head2}/></a>
          </div>

          <div class="item">
            <a href=""><img src={Head3} alt ={Head3}/></a>
          </div>

          <div class="item">
            < a href=""><img src={Head4} alt ={Head4}/></ a>
          </div>

          <div class="item">
            <a href=""><img src={Head5} alt ={Head5}/></a>
          </div>
        </div>


        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Slide;
