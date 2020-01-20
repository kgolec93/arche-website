import React, { Component } from 'react'
import data from '../../Data/data.js'
import archeLogoWhiteSmall from '../../assets/svg/archeLogoWhiteSmall.svg'
import webbleLogoSmall from '../../assets/svg/webbleLogoSmall.svg'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <header id='navBar'>
                <a href='/' className="headerLogo">
                    <img src={archeLogoWhiteSmall} alt="" />
                </a>
                <div className="menuContainer">
                    {data.map(item => {
                        return (
                            <NavLink
                                to={item.url}
                                key={`menuItem-${item.url}`}
                                className="menuButton"
                                activeClassName='active'
                            >
                                {item.section}
                            </NavLink>
                        )
                    })}
                </div>
                <a href="https://webble.pl" target='blank' className="webbleLogo">
                    <img src={webbleLogoSmall} alt="webble.pl" />
                </a>
            </header>
        )
    }
}

export default NavBar
