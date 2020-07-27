import React, { Component }from 'react'

const ThemeSwitchContext = React.createContext();
const ThemeSwitchConsumer = ThemeSwitchContext.Consumer;

class ThemeSwitchProvider extends Component {

	toggleTheme = (event) => {
	   this.setState({ theme: event.target.checked ? "night" : "light" });
	};

	state = {
		theme: "light",
		toggleTheme: this.toggleTheme
	};

	render() {
		return (
			<ThemeSwitchContext.Provider value={this.state}>
				{this.props.children}
			</ThemeSwitchContext.Provider>
		);
	}
}

export {
	ThemeSwitchContext,
	ThemeSwitchProvider,
	ThemeSwitchConsumer
}

