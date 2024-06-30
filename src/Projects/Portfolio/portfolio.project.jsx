import React, { useState } from 'react';
import './portfolio.styles.css';
import useWindowWidth from '../../hooks/useWindowWidth.hook';
import { PortfolioDesktopComponent } from './desktop/portfolio-desktop.component';
import { PortfolioMobileComponent } from './mobile/portfolio-mobile.component';
// import cv from '../../assets/images/CV.png';
// import selfie from '../../assets/images/selfiePort.jpg'

// Функция для генерации случайного светлого цвета
const getRandomLightColor = () => {
  const r = Math.floor(Math.random() * 128) + 128; // от 128 до 255
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;
  return `rgb(${r}, ${g}, ${b})`;
};

// Функция для генерации случайного темного цвета
const getRandomDarkColor = () => {
  const r = Math.floor(Math.random() * 128); // от 0 до 127
  const g = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  return `rgb(${r}, ${g}, ${b})`;
};

export const PortfolioProject = () => {
  const [nameColor, setNameColor] = useState('black');
  const [surnameColor, setSurnameColor] = useState('white');
  const width = useWindowWidth();

  const toggleNameColor = () => {
    setNameColor(getRandomDarkColor());
  };
  const toggleSurnameColor = () => {
    setSurnameColor(getRandomLightColor());
  };

  return (
    <div>
      {width > 1024 ? (
        <PortfolioDesktopComponent
          nameColor={nameColor}
          surnameColor={surnameColor}
          toggleNameColor={toggleNameColor}
          toggleSurnameColor={toggleSurnameColor}
        />
      ) : (
        <PortfolioMobileComponent
          nameColor={nameColor}
          surnameColor={surnameColor}
          toggleNameColor={toggleNameColor}
          toggleSurnameColor={toggleSurnameColor}
        />
      )}
    </div>
  );
};
