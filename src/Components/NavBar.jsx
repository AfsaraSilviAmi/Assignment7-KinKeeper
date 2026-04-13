import React from 'react';
import logoImg from "../assets/logo.png"
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { CiTimer } from 'react-icons/ci';
import { BsGraphUp } from 'react-icons/bs';

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" /></a>
  </div>
  <div className="navbar-end gap-4">
    <NavLink to ="/" className={({isActive})=> isActive? "bg-green-950 text-white rounded-lg px-3 py-1 flex items-center gap-1": "flex items-center gap-1 text-gray-600"}><RiHome2Line/> Home</NavLink>
    <NavLink to="/timeline" className={({isActive})=> isActive? "bg-green-950 text-white rounded-lg px-3 py-1 flex items-center gap-1": "flex items-center gap-1 text-gray-600"}><CiTimer></CiTimer>Timeline</NavLink>
    <NavLink to ="/stats" className={({isActive})=> isActive? "bg-green-950 text-white rounded-lg px-3 py-1 flex items-center gap-1": "flex items-center gap-1 text-gray-600"}><BsGraphUp></BsGraphUp>Stats</NavLink>
  </div>
</div>
        </div>
    );
};

export default NavBar;