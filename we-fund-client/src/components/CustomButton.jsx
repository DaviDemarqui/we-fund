import React from 'react'

function CustomButton({btnType, title, handleClick, styles, disabled}) {
  return (
    <button
        disabled={disabled}
        type={btnType}
        className={`font-epilogue font-medium text-[16px] leading-[26px] text-white 
        min-h-[52px] px-4 rounded-[10px] ${styles}`}
        onClick={handleClick}
    >{title}</button>
  )
}

export default CustomButton