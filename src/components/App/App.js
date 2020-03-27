import React, { useContext } from 'react'
import './App.scss'

import Header from '../Header/Header.js'
import AboutMe from '../AboutMe/AboutMe.js'
import CourseRate from '../CourseRate/CourseRate.js'
import { ThemeSwitchContext } from '../ThemeSwitchContext/ThemeSwitchContext.js'

const App = () => {	
	const value = useContext(ThemeSwitchContext);

	let classTheme = (value.theme === 'night') ? 'night' : 'light'; 

	return (
		<div className={`app ` + classTheme}>
			<section>
				<Header />

				<main className="main">
					<AboutMe />				
					<CourseRate />
				</main>	

			</section>
		</div>
		)

}

export default App;

