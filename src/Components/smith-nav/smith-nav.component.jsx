import React, { useState } from 'react';
import './smith-nav.style.css';
import logo from '../../assets/images/SmithStyleLogo340x90.png';
import { Link } from 'react-router-dom';
import { NavOptionsCollection } from '../../assets/collections/nav-options.collection';
import { CiMenuFries } from 'react-icons/ci';

export const SmithNavComponent = () => {
  const [sideMenuVisible, setSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenuVisible);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  return (
    <div className="rounded-md smith-nav flex justify-between max-sm:px-6 px-14 py-6 my-7 h-16 md:mx-3 lg:mx-20 bg-gradient-to-b from-falls-dark1 to-falls-dark3">
      <div className="logo select-none cursor-pointer">
        <Link to="/">
          <img className='w-52' src={logo} alt="SmithStyleLogo" />
        </Link>
      </div>
      <ul className="options max-md:hidden flex gap-20 align-middle select-none text-md lg:text-xl ease-in transition-all">
        {NavOptionsCollection.map((option, index) => (
          <li
            key={index}
            className="option inline-block hover:text-stone-400 transition-all ease-linear duration-75">
            <Link to={option.path}>{option.name}</Link>
          </li>
        ))}
      </ul>

      <SideMenuBtn toggleSideMenu={toggleSideMenu}/>
      <SideMenu closeSideMenu={closeSideMenu} sideMenuVisible={sideMenuVisible} />
    </div>
  );
};

const SideMenuBtn = ({toggleSideMenu}) =>{
  return(
    <div className="md:hidden flex justify-center">
        <button onClick={toggleSideMenu} className="text-3xl">
          <CiMenuFries />
        </button>
      </div>
  )
}

const SideMenu = ({closeSideMenu, sideMenuVisible}) => {
  return(
<div
        className={`fixed inset-0 bg-falls-dark0 bg-opacity-75 z-50 transform transition-transform duration-300 ${
          sideMenuVisible ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
        <div className="relative h-full w-64 bg-falls-dark0 p-4">
          <button
            onClick={closeSideMenu}
            className="absolute top-4 right-4 text-xl">
            ✕
          </button>
          <ul className="mt-10 space-y-4">
            {NavOptionsCollection.map((option, index) => (
              <li
                key={index}
                className="option">
                <Link to={option.path} onClick={closeSideMenu}>
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}