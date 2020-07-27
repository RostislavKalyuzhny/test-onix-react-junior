import React from 'react'
import './Footer.scss'

const Footer = () => {	

	return (		
			<footer id="footer">
				<div className="social github">
					<a href="https://github.com/RostislavKalyuzhny" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-github fa-2x"></i>
					</a>
				</div>

				<div className="social linkedin">
					<a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-linkedin fa-2x"></i>
					</a>
				</div>
			</footer>	
		)
}

export default Footer;