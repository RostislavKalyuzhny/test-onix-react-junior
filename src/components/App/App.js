import React from 'react'
import './App.css'

import Header from '../Header/Header.js'
import AboutMe from '../AboutMe/AboutMe.js'
import CourseRate from '../CourseRate/CourseRate.js'



const App = () => {

	return (
		<section>
			<Header />

			<main className="main">
				<AboutMe />				
				<CourseRate />
			</main>
			
		</section>
	)
}

export default App;

