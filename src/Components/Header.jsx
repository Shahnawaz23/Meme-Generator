import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <div>
            <header className='header-container'>
                <img src={logo} alt="logo" className='header-logo'/>
                <h2 className='header-title'>Meme Generator</h2>
                <p className='header-text'>React Course - Project 3</p>
            </header>
        </div>
    )
}