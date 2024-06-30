import React, { useState } from 'react';
import './portfolio.styles.css';
import {
  Skills,
  Languages,
} from '../../../assets/collections/skills_languages.collection';
import { TileComponent } from '../tile/tile.component';

export const PortfolioMobileComponent = (props) => {
  return (
    <div className="mx-[15px]">
      <h1 className="text-center text-[25px] bg-falls-dark1 rounded-md p-2 mb-5">
        Portfolio
      </h1>

      {/* <img src={profilePic} alt="" className='rounded-t-md h-[200px]' /> */}
      <PortfolioHeadMobile
        nameColor={props.nameColor}
        surnameColor={props.surnameColor}
        toggleNameColor={props.toggleNameColor}
        toggleSurnameColor={props.toggleSurnameColor}
      />
      <section>
        <TileComponent inDev={true} component={<div>In developing</div>} title={"EXPIRIENCE"}/>
      </section>
      <section>
        <TileComponent inDev={true} component={<div>In developing</div>} title={"PROFILE"}/>
      </section>
      <section>
        <TileComponent inDev={true} component={<div>In developing</div>} title={"CONTACTS"}/>
      </section>
    </div>
  );
};

const PortfolioHeadMobile = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="portfolio-head rounded-md flex flex-col">
        {/* NAME AND POSITION */}
        <TileComponent
          component={
            <ProfileInfoMobile
              nbg={props.nameColor}
              sbg={props.surnameColor}
              tnc={props.toggleNameColor}
              tsc={props.toggleSurnameColor}
            />
          }
          title="PROFILE INFO"
        />

        {/* SKILLS AND LANGUAGES */}
        <TileComponent component={<ProfileSkillsMobile />} title="SKILLS" />
      </div>
    </>
  );
};

const ProfileInfoMobile = ({ nbg, sbg, tnc, tsc }) => {
  return (
    <div
      className="flex justify-between items-center
                    sm:justify-around">
      <FullNameFigure nbg={nbg} sbg={sbg} tnc={tnc} tsc={tsc} />
      <ProfilePositionMobile />
    </div>
  );
};

const FullNameFigure = ({ nbg, sbg, tnc, tsc }) => {
  return (
    <div className="fullname select-none text-lg max-sm:w-[150px] w-[200px] h-[90%] grid grid-cols-2 grid-rows-2">
      {/* name */}
      <div
        onClick={tnc}
        className="col-start-1 col-end-2 row-start-1 row-end-2 border-b-[6px] text-white 
                              rounded-tl-md
                              flex items-center justify-center cursor-pointer"
        style={{
          backgroundColor: nbg,
          borderBottom: `6px solid ${sbg}`,
          transition: 'background-color 0.5s ease',
        }}>
        Ivan
      </div>

      {/* divider */}
      <div
        className="col-start-2 col-end-3 row-start-1 row-end-2 border-b-[6px]"
        style={{ borderBottom: `6px solid ${nbg}` }}></div>

      {/* surname */}
      <div
        onClick={tsc}
        className="col-start-2 col-end-3 row-start-2 text-black
                              flex items-center justify-center rounded-br-md
                              cursor-pointer"
        style={{
          backgroundColor: sbg,
          transition: 'background-color 0.5s ease',
        }}>
        Popov
      </div>
    </div>
  );
};

const ProfilePositionMobile = () => {
  return (
    <div className="max-sm:pr-0 max-sm:text-[17px] select-none profile-position pr-4 flex flex-col items-center gap-1 text-xl">
      <span>Full stack</span>{' '}
      <span className="border-b-[1px] w-10 border-b-white"></span>{' '}
      <span>web developer</span>
    </div>
  );
};

const ProfileSkillsMobile = () => {
  return (
    <div className="flex justify-betwee">
      <div className="skills w-[50%] text-center">
        <h2 className="text-lg font-bold">Skills</h2>
        <ul className="p-2 rounded-md border-animate text-start mt-5 flex flex-col gap-3">
          {Skills.map((skills) => {
            return <li className=" rounded-md p-2 bg-[#e8e8e817]">{skills}</li>;
          })}
        </ul>
      </div>
      <div className="languages w-[50%] text-center">
        <h2 className="text-lg font-bold">Languages</h2>
        <ul className="p-2 mt-5 flex flex-col gap-3 ml-3">
          {Languages.map((language) => {
            return (
              <li className=" rounded-md p-2 bg-[#e8e8e817]">
                {language.language} - {language.level}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
