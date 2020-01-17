import React, { Component } from 'react'
import data from '../../Data/data.js'
import archeLogoWhiteSmall from '../../assets/svg/archeLogoWhiteSmall.svg'
import webbleLogoSmall from '../../assets/svg/webbleLogoSmall.svg'
import './NavBar.scss'

export class NavBar extends Component {
    render() {
        return (
            <header id='navBar'>
                <div className="headerLogo">
                    <img src={archeLogoWhiteSmall} alt=""/>
                </div>
                <div className="menuContainer">
                    {data.map(item => {
                        return(<p className="menuButton">{item.section}</p>)
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
