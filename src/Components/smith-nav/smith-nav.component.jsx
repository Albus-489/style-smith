import React from 'react';
import './smith-nav.style.css';
import logo from '../../assets/images/SmithStyleLogo340x90.png';
import { Link } from 'react-router-dom';
import { NavOptionsCollection } from '../../assets/collections/nav-options.collection';

export const SmithNavComponent = () => {
  return (
    <div className="smith-nav flex justify-between my-7 h-16 md:mx-3 lg:mx-20">
      <div className="logo select-none cursor-pointer">
        <Link to="/">
          <img width={220} src={logo} alt="" />
        </Link>
      </div>
      <ul className="options flex gap-20 align-middle select-none text-blue-400 md:text-xs lg:text-xl">
        {NavOptionsCollection.map((option) => {
          return (
            <li className="option oprion-home inline-block hover:bg-gradient-to-r from-pink-400 to-blue-300 hover:text-transparent hover:bg-clip-text">
              <Link to={option.path}>{option.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
{
  /* <li className="option oprion-home inline-block hover:bg-gradient-to-r from-pink-400 to-blue-300 hover:text-transparent hover:bg-clip-text">
          <Link to="/discord-navbar">Home</Link>
        </li>
        <li className="option oprion-cv inline-block hover:bg-gradient-to-r from-pink-400 to-blue-300 hover:text-transparent hover:bg-clip-text">
          CV
        </li>
        <li className="option oprion-about inline-block hover:bg-gradient-to-r from-pink-400 to-blue-300 hover:text-transparent hover:bg-clip-text">
          About
        </li> */
}
