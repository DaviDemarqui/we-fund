import React from 'react'

function FormField({ labelName, placeholder, inputType,
isTextArea, value, handleChange }) {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {labelName && (
            <span className='font-epilogue font-medium text-[14px]
            leading-[22px] text-slate-200 mb-[10px]'>{labelName}</span>
        )}
        {isTextArea ? (
            <textarea
                required
                value={value}
                onChange={handleChange}
                rows={10}
                placeholder={placeholder}
                className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-zinc-600
                bg-transparent font-epilogue text-white text-[14px] placeholder:text-slate-300 rounded-[10px]
                sm:min-w-[300px] focus:border-[#63637b]'
            />
        ) : ( 
            <input 
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={placeholder}
                className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-zinc-600
                bg-transparent font-epilogue text-white text-[14px] placeholder:text-slate-300 rounded-[10px]
                sm:min-w-[300px] focus:border-[#63637b]'
            />
        )}
    </label>
  )
}

export default FormField