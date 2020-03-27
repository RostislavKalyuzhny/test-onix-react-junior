import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.js'
import {ThemeSwitchProvider} from './components/ThemeSwitchContext/ThemeSwitchContext.js'


ReactDOM.render( <ThemeSwitchProvider><App/></ThemeSwitchProvider>, document.getElementById('root'));

