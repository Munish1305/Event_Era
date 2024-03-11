import React from 'react'

export default function Block({item}) {
    
  return (
    <div className='w-[28%] rounded-xl flex flex-col border-b-2 border-transparent text-center shadow-lg pb-5 px-5 hover:border-black-200'>
        <div className="w-full h-[308px] p-10 rounded-sm oject-cover overflow-hidden">
            <img src={item.f_img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className='pb-12'>
            <h4 className='text-xl text-black font-bold pb-2'>{item.f_title}</h4>
            <p className='text-xl  text-black'>{item.f_description}</p>
        </div>
    </div>
  )
} 
