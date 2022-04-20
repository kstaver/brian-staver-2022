import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
   // state = { clicked:false }
   
    render(){
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Brian Staver</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className="fa-solid fa-square-list"></i>
                </div>
                <ul>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
