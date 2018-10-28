import React from 'react';
import {Navbar} from 'reactstrap';
import Logo from './img/logo-ciayo-comics.gif';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <a href ="">
            <img src={Logo} alt={Logo} className="logoo"/>
          </a>

          <div className="nav">
            <a href=""><b>ALL COMICS</b></a>
            <a href=""><b>SCHEDULE</b></a>
            <a href=""><b>CHALLENGE</b></a>
            <a href=""><b>BLOG</b></a>
          </div>

          <div className="nav2">
            <a href="">
              <h4 className="login">LOGIN / REGISTER</h4>
            </a>
          </div>

        </Navbar>
      </div>
    );
  }
}