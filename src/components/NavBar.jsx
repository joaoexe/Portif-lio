import React from 'react';
import  logo  from "../assets/logos.png"
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-10 w-20' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaGithub/>
          <FaLinkedin/>
          <BiLogoGmail/>
        </div>
    </nav>
  )
}
    
export default NavBar
