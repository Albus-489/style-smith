import React from 'react';

export const BtnCollapseComponent = ({ isCollapsed, icon, toggleCollapse, color='#8960f244' }) => {
  return (
    <div className={`btn-collapse flex flex-row-reverse `}>
      <span
      style={!isCollapsed ? {backgroundColor:`${color}`} : {backgroundColor:`#7242AD`}}
        className={`p-1 ${!isCollapsed ? 'shadow-none' : 'shadow-md'} rounded-t-[5px] transition-all`}>
        <img
          onClick={toggleCollapse}
          className={`  transition-all ease-in-out text-white text-2xl transform ${!isCollapsed ? 'rotate-[135deg]' : 'rotate-0'}`}
          src={icon}
          alt=""
        />
      </span>
    </div>
  );
};
