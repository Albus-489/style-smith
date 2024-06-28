import React, { useState } from 'react';
import './portfolio.styles.css';
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

  const toggleNameColor = () => {
    setNameColor(getRandomDarkColor());
  };
  const toggleSurnameColor = () => {
    setSurnameColor(getRandomLightColor());
  };

  return (
    <div className="mx-[100px]">
      <h1 className="text-center text-[25px] bg-falls-dark1 rounded-md p-2 mb-5">
        Portfolio
      </h1>
      <PortfolioHead
        nameColor={nameColor}
        surnameColor={surnameColor}
        toggleNameColor={toggleNameColor}
        toggleSurnameColor={toggleSurnameColor}
      />
    </div>
  );
};

const PortfolioHead = (props) => {
  return (
    <div className="portfolio-head h-[580px] mb-[20px] rounded-md flex">
      <div className="profile-photo bg-falls-dark1 w-[30%] h-full mr-[20px] rounded-l-md bg-cover"></div>
      <div className="w-[70%] h-[580px]">
        <div className="profile-name flex items-center justify-between px-10 bg-falls-dark1 h-[150px] rounded-tr-md mb-[20px]">
          <FullName
            nbg={props.nameColor}
            sbg={props.surnameColor}
            tnc={props.toggleNameColor}
            tsc={props.toggleSurnameColor}
          />
          <ProfilePosition />
        </div>
        <div className="profile-skills-language bg-falls-dark1  h-[410px] rounded-rb-md"></div>
      </div>
    </div>
  );
};

const FullName = ({ nbg, sbg, tnc, tsc }) => {
  return (
    <div className="fullname select-none text-[35px] w-[250px] h-[100%] p-4 grid grid-cols-2 grid-rows-2">
      <div
        onClick={tnc}
        className="col-start-1 col-end-2 row-start-1 row-end-2 border-b-[6px] text-white 
                              rounded-tl-md
                              flex items-center justify-center cursor-pointer"
        style={{
          backgroundColor: nbg,
          borderBottom: `6px solid ${sbg}`,
          transition: 'background-color 0.5s ease'
        }}>
        Ivan
      </div>
      <div
        className="col-start-2 col-end-3 row-start-1 row-end-2 border-b-[6px]"
        style={{ borderBottom: `6px solid ${nbg}` }}></div>
      <div
        onClick={tsc}
        className="col-start-2 col-end-3 row-start-2 text-black
                              flex items-center justify-center rounded-br-md
                              cursor-pointer"
        style={{
          backgroundColor: sbg,
          transition: 'background-color 0.5s ease'
        }}>
        Popov
      </div>
    </div>
  );
};

const ProfilePosition = () =>{
  return (
    <div className="profile-position w-[200px]">Full stack web developer</div>
  )
}