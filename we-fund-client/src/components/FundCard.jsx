import React from 'react'

import { tagType, thirdweb } from '../assets'
import { daysLeft } from '../utils'

function FundCard( {owner, title, description, target, deadline, amountCollected, image, handleCLick }) {
  const remainingDays = daysLeft(deadline);

    return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] hover:bg-[#22222c] transition-all cursor-pointer"
    onClick={handleCLick}>
        <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-t-[15px]"/>
    
        <div className="flex flex-col p-4">
            <div className="flex flex-row items-center mb-[18px]">
                <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain" />
                <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
                    category
                </p>
            </div>

            <div className="block">
                <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
                    {title}
                </h3>
                <p className="mt-2 font-epilogue font-normal text-slate-400 text-left leading-[18px] truncate">
                    {description}
                </p>
            </div>

            <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                <div className="flex flex-col">
                    <h4 className="font-epilogue font-semibold text-[14px] text-slate-300 leading-[22px]">
                        {amountCollected}
                    </h4>
                    <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-slate-200 sm:max-w-[120px] truncate">
                        Raised of {target}
                    </p>
                </div>

                <div className="flex flex-col">
                    <h4 className="font-epilogue font-semibold text-[14px] text-slate-300 leading-[22px]">
                        {remainingDays}
                    </h4>
                    <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-slate-200 sm:max-w-[120px] truncate">
                        Days Left {daysLeft}
                    </p>
                </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
                <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
                    <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain" />
                </div>
                <p className="flex-1 font-epilogue font-normal text-[12px] text-slate-200 truncate">
                    by <span className="text-slate-300">{owner}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FundCard;