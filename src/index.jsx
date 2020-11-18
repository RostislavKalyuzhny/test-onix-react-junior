import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { ThemeSwitchProvider } from './components/ThemeSwitchContext/ThemeSwitchContext';

ReactDOM.render(<ThemeSwitchProvider><App /></ThemeSwitchProvider>, document.getElementById('root'));
