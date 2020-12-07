import React, { useContext } from 'react';

import './ThemeSwitch.scss';
import { ThemeSwitchContext } from '../ThemeSwitchContext/ThemeSwitchContext';

const ThemeSwitch = () => {
  const value = useContext(ThemeSwitchContext);

  return (
    <div className="theme-switch">
      <span>Зміна теми:</span>

      <input
        onChange={value.toggleTheme}
        type="checkbox"
        checked={value.theme === 'night'}
      />
    </div>
  );
};

export default ThemeSwitch;
