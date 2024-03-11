import React from 'react'

export default function HostBlock({item}) {
    
  return (
    <div className='w-[28%] rounded-xl flex flex-col border-b-2 border-transparent text-center shadow-lg pb-5 px-5 hover:border-black'>
        <div className="w-full h-[200px] mx-auto py-10 rounded-sm">
            <img src={item.h_img} alt="" className="w-1/5 mx-auto object-cover" />
        </div>
        <div className='pb-16'>
            <h4 className='text-xl text-black font-bold pb-2'>{item.h_title}</h4>
            <p className='text-xl  text-black'>{item.h_description}</p>
        </div>
    </div>
  )
} 
