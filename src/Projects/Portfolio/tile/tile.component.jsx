import React, { useState } from 'react';
import { BtnCollapseComponent } from '../../../Components/btn-collapse/btn-collapse.component';
import plus from '../../../assets/images/plus.svg';

export const TileComponent = ({ component, title = 'TITLE', inDev=false }) => {
  const [isCollapsed, setIsCollapsed] = useState(inDev);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="mb-[25px]">
      <BtnCollapseComponent
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
        icon={plus}
      />
      <div
        className={`bg-animate bg-falls-dark1 rounded-tl-md px-5 
                        ${isCollapsed ? 'h-[50px]' : ''}
                        ${isCollapsed ? '' : 'py-5'}`}>
        {!isCollapsed ? (
          component
        ) : (
          <div className="font-bold w-full h-full flex justify-center items-center">
            <span>{title}</span>
          </div>
        )}
      </div>
    </div>
  );
};
