import React from 'react';
import './discord-nav.style.css';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BsFillLightningFill, BsGearFill, BsPlus } from 'react-icons/bs';

export const DiscordNavBarProject = () => {
  return (
    <div
      className="bg-[#8988881c] 
                   mx-[100px] pb-5">
      <h1
        className="text-[25px] text-center text-green-500
                      p-3 mb-5 
                      bg-gray-900">
        Discord inspired sidebar
      </h1>
      <div
        className="discord-nav 
                      ml-32 pt-2 pb-2 w-16 
                      select-none 
                      bg-gray-900 rounded-md">
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <SideBarIcon icon={<BsGearFill size="22" />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => {
  return (
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
