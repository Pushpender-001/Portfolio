import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'
import { RiMenu2Fill } from '@remixicon/react';
import { CgProfile } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Header = () => {
  const[menu,openMenu] = useState(false);
  const[showMenu,setShowMenu] = useState(true);

  return (
    <header className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 px-20'>
      <div className='text-xl font-bold tracking-wide'>PORTFOLIO</div>
        <ul className={`${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
          <a href="#ABOUT ME">
          <li className='text-md transition-all duration-300 p-1 md:p-0 flex gap-1'> <CgProfile className='font-bold mt-1'/>ABOUT ME</li>
         </a>
         <a href="#SKILLS">
          <li className='text-md transition-all duration-300 p-1 md:p-0 flex gap-1'> <FaProjectDiagram className='font-bold mt-1'/>SKILLS</li>
         </a>
         <a href="PROJECT">
          <li className='text-md transition-all duration-300 p-1 md:p-0 flex gap-1'> <FaFolderOpen className='font-bold mt-1'/> PROJECT</li>
          </a>
          <a href="CONTACT">
          <li className='text-md transition-all duration-300 p-1 md:p-0 flex gap-1'> <FaPhoneAlt className='font-bold mt-1'/>CONTACT</li>
        </a>
        </ul>
          {showMenu ? (
          <RiMenu2Line size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300' 
          onClick={()=>{
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
          />
          ):(
          <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'/>
        )}
    </header>
  );
};

export default Header
