import React from 'react'
import './portfolio.styles.css'
import {
  Skills,
  Languages,
} from '../../../assets/collections/skills_languages.collection';

export const PortfolioDesktopComponent = (props) => {
    return (
      <div className="mx-[100px]">
        <h1 className="text-center text-[25px] bg-falls-dark1 rounded-md p-2 mb-5">
          Portfolio
        </h1>
        <PortfolioHead
          nameColor={props.nameColor}
          surnameColor={props.surnameColor}
          toggleNameColor={props.toggleNameColor}
          toggleSurnameColor={props.toggleSurnameColor}
        />
      </div>
    );
  };


  
  const PortfolioHead = (props) => {
    return (
      <div className="portfolio-head h-[580px] mb-[20px] rounded-md flex">
        <div className="profile-photo bg-falls-dark1 w-[30%] h-full mr-[20px] rounded-l-md hover:shadow-zinc-200"></div>
        <div className="w-[70%] h-[580px]">
          <div className="bg-animate profile-name flex items-center justify-between px-10 bg-falls-dark1 h-[150px] rounded-tr-md mb-[20px]">
            <FullName
              nbg={props.nameColor}
              sbg={props.surnameColor}
              tnc={props.toggleNameColor}
              tsc={props.toggleSurnameColor}
            />
            <ProfilePosition />
          </div>
          <ProfileSkills />
        </div>
      </div>
    );
  };
  
  const FullName = ({ nbg, sbg, tnc, tsc }) => {
    return (
      <div className="fullname select-none text-[30px] w-[240px] h-[90%] p-4 grid grid-cols-2 grid-rows-2">
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
            transition: 'background-color 0.5s ease',
          }}>
          Popov
        </div>
      </div>
    );
  };
  
  const ProfilePosition = () => {
    return (
      <div className="select-none profile-position pr-4 flex flex-col items-center gap-1 text-xl">
        <span className='transition-color p-2 relative inline-block text-4xl cursor-pointer'>Full stack</span> <span className="border-b-[1px] w-10 border-b-white"></span> <span>web developer</span>
      </div>
    );
  };

  const ProfileSkills = () => {
    return (
      <div className="bg-animate profile-skills-language bg-falls-dark1 mb-[20px] rounded-br-md flex justify-between px-5 py-8">
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
          <ul className='p-2 mt-5 flex flex-col gap-3 ml-3'>
            {Languages.map((language) => {
              return <li className=" rounded-md p-2 bg-[#e8e8e817]">{language.language} - {language.level}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }