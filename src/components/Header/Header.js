import React from 'react'

import './Header.scss'
import logo from '../../images/logo.png'

import ArticleLinks from '../ArticleLinks/ArticleLinks.js'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.js'
import { Link } from 'react-router-dom'


const Header = () => {
	return (
		<header id="header">

				<Link to='/'>
					<img className="logo" src={logo} alt="Щось не так :("/> 
				</Link>
				
			<nav className="nav">
				<ul className="nav-main">
					<li>
						<Link to='/about-me'>Про мене</Link>
					</li>
					<li>
						<Link to='/course-rate'>Курс валют</Link>
					</li>
				</ul>
	
				<ArticleLinks /> {/* виводиться тільки в мобільній версії (App.scss - медіа запроси)*/}

			</nav>

			<div className="switch-theme">
				<ThemeSwitch />
			</div>
			
		</header>
	)
}

export default Header;