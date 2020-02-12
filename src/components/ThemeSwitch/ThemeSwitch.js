import React, { Component } from 'react'

import './ThemeSwitch.css'

class ThemeSwitch extends Component {   

   state = {
      active: true     				// false - світла тема; true - темна тема
   };

	// стилі, які інвертують стандартні кольори на сайті
   css = `  								
		html { 
			filter: invert(100%); 
			background: #fefefe; 
		}  

		* { 
			background-color: inherit 
		}

		select option {
			background-color: #242424;
			color: #fefefe;
		}
	`;
	
	isActive = () => this.state.active === true;

	toggle = () => {
		this.setState({
			active: this.isActive() ? false : true
		});
	};


	render() {
		return (  
			<React.Fragment>
				<span>Зміна теми:</span>
				<input 
					type="checkbox"
					checked={this.state.active}
					onChange={this.toggle}
				/>
				
				<style media={this.isActive() ? 'screen' : 'none'}>  
					{this.isActive() ? this.css.trim() : this.css}
				</style>
			</React.Fragment>
		);
	}
}


export default ThemeSwitch;