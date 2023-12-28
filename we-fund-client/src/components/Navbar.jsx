import React, { useState } from 'react'
import { navlinks } from '../constants/navlinks';
import { Link, useNavigate } from 'react-router-dom';
import { search, thirdweb } from '../assets';
import CustomButton from './CustomButton';
import { menu } from '../assets';

function Navbar() {
  const navigate = useNavigate();
  
  const [isActive, setIsActive] = useState
  ('dashboard');

  const [toggleDrawer, setToggleDrawer] = useState
  (false);

  const address = "0x09879";

  return (
    <div className='flex md:flex-row
    flex-col-reverse justify-between mb-[35px]
    fap-6'>
      <div className="lg:flex-1 flex flex-row max-w-[458px]
        py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">

        <input type="text" placeholder='Search for campaigns' 
          className='flex w-full font-epilogue font-normal text-[14px]
          placeholder:text-[#8e9199] text-white bg-transparent outline-none' />

        <div className="w-[72px] h-full rounded-[20px]
        bg-slate-700 hover:bg-blue-700 flex justify-center items-center
          cursor-pointer">
            <img src={search} alt="search" className='w-[15px] h-[15px] object-contain' />
        </div>

      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-blue-600  hover:bg-blue-700 rounded-full' : 'bg-[#8c6dfd] rounded-full'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else 'connect()'
          }}
        />

        <Link to="/profile">
          <div className='w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain'/>
          </div>
        </Link>
      </div>
    
      
      {/* SMALL SCREEN NAVIGATION */}

      <div className="sm:hidden flex justify-between
      items-center relative">
          <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
            <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain'/>
          </div>

          <img 
            src={menu} 
            alt="menu"
            className='w-[34px] h-[34px] object-contain cursor-pointer' 
            onClick={() => setToggleDrawer(!toggleDrawer)} 
          />

          <div className={`absolute top-[60px] right-0
            left-0 bg-[#1c1c24] z-10 shadow-secondary py-4
            ${!toggleDrawer} ? '-translate-y-[100vh]' : 'translate-y-0' transition-all duration-700`}>
              <ul className='mb-4'>
                {navlinks.map((link) => (
                  <li
                    key={link.name}
                    className={`flex p-4 ${isActive === link.name && 'bg-[3a3a43]'}`}
                    onClick={() => {
                      setIsActive(link.name);
                      setToggleDrawer(false);
                      navigate(link.link);
                    }}
                  >
                    <img 
                      src={link.imgUrl} 
                      alt={link.name} 
                    />
                    <p className={`ml-[20px] font-epilogue font-medium text-[14px] 
                    ${isActive === link.name ? 'text-blue-600' : 'text-white'}`}>{link.name}</p>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar;