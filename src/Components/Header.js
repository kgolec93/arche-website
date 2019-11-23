import React, { Component } from 'react'
import data from '../Data/data.js'

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerLogo">
                    <p style={{fontStyle: 'italic'}}>logo placeholder</p>
                </div>
                <div className="menuContainer">
                    {data.map(item => {
                        return(<p className="menuButton">{item.section}</p>)
                    })}
                </div>
            </header>
        )
    }
}

export default Header
