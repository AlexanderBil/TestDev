import {NavLink} from 'react-router-dom';
import React from 'react';
import './Nav.css';


class Nav extends React.Component{
  render(){
    return(
   <nav className="nav">
    <ul className="ul">
        <li><NavLink to="/" exact activeClassName={'active'}>Exchange Rates</NavLink></li>
        <li><NavLink to="/calc">Converter</NavLink></li>
    </ul>
</nav>
    )
  }
}

export default Nav;
