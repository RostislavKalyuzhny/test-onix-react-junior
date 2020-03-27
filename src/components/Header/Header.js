import React from 'react'

import './Header.scss'
import logo from '../../images/logo.png'


import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.js'


const Header = () => {
	return (
		<header className="header">

			<div className="logo">
				<img src={logo} alt="Щось не так :("/>
			</div>

			<div className="theme-switch-button">
				<ThemeSwitch />
			</div>
			
		</header>
	)
}

export default Header;