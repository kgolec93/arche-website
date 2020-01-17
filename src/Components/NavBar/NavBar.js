import React, { Component } from 'react'
import data from '../../Data/data.js'
import archeLogoWhiteSmall from '../../assets/svg/archeLogoWhiteSmall.svg'
import webbleLogoSmall from '../../assets/svg/webbleLogoSmall.svg'
import './NavBar.scss'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <header id='navBar'>
                <a href='/' className="headerLogo">
                    <img src={archeLogoWhiteSmall} alt=""/>
                </a>
                <div className="menuContainer">
                    {data.map(item => {
                        return(<Link to={item.url} key={`menuItem-${item.url}`} className="menuButton">{item.section}</Link>)
                    })}
                </div>
                <a href="https://webble.pl" target='blank' className="webbleLogo">
                    <img src={webbleLogoSmall} alt="webble.pl"/>
                </a>
            </header>
        )
    }
}

export default NavBar
