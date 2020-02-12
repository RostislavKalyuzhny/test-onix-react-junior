import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'


import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.js'


const Header = () => {
	return (
		<header className="header">

			<div className="header-box-logo">
				<img src={logo} alt="Щось не так :("/>
			</div>

			<div className="header-box">
				<ThemeSwitch />
			</div>
			
		</header>
	)
}

export default Header;