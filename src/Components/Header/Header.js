import React, { Component } from 'react'
import data from '../../Data/data.js'
import Logo from '../logo'
import './Header.scss'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerLogo">
                    <Logo />
                </div>
                <div className="menuContainer">
                    {data.map(item => {
                        return(<p key={`menuItem-${item.section}`}className="menuButton">{item.section}</p>)
                    })}
                </div>
            </header>
        )
    }
}

export default Header
