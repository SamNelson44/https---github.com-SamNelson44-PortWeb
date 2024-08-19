import React, { useState } from 'react';
import '../css/DarkLightMode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useDarkLight } from '../Contexts/DarkLightContext';

const DarkLightButton = () => {
  const { toggleMode, toggleLightMode } = useDarkLight();

  return (
    <button className={toggleMode ? 'darkMode' : 'lightMode'} onClick={toggleLightMode}>
    {toggleMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    &nbsp;
    {toggleMode ? 'LIGHT' : 'DARK'}
    </button>
  );
};

export default DarkLightButton;