import React, { useState } from 'react'
import { navlinks } from '../constants/navlinks';
import { useNavigate } from 'react-router-dom';
import { search } from '../assets';
import CustomButton from './CustomButton';

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
        bg-[#4acd8d] flex justify-center items-center
          cursor-pointer">
            <img src={search} alt="search" className='w-[15px] h-[15px] object-contain' />
        </div>

      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-blue-600  hover:bg-blue-700' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else 'connect()'
          }}
        />
      </div>
    
    </div>
  )
}

export default Navbar;