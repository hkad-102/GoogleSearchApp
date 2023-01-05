import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import { CgMenuGridO } from 'react-icons/cg'

const HomeHeader = () => {
  return (
    <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-5'>
      <div className='flex gap-4'>
        <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>Gmail</span>
        <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'>Images</span>
      </div>

      <div className='flex gap-4'>
        <CgMenuGridO className='cursor-pointer w-6 h-6 hover:bg-black/5 rounded-full p-2 box-content text-gray-600'/>

        {/* <FaUserCircle className='w-6 h-6 cursor-pointer'/> */}
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md'>Sign in</button>
      </div>

    </header>
  )
}

export default HomeHeader