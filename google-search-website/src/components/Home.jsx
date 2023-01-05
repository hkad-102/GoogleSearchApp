import React from 'react'
import Logo from '../assets/google-logo.png'
import HomeHeader from './HomeHeader'
import SearchInput from './SearchInput'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='flex h-[100vh] flex-col '>
      <HomeHeader />
      <main className='grow flex justify-center'>
        <div className='w-full px-5 flex flex-col items-center mt-24'>
          <img src={Logo} alt="" className='w-[172px] md:w-[272px] mb-8' />
          <SearchInput />
          <div className='flex gap-2 text-[#3c4043] mt-8'>
            <button className='h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
              GoogleSearch
            </button>
            <button className='h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
              I'm Feeling Lucky
            </button>
          </div>
          <div className='hidden md:block'>
            <div className='mt-8 flex gap-x-4 text-[13px]'>
              <p className='font-thin text-[#3c4043]'>Google offered in:</p>
              <div className='flex gap-x-4 text-blue-700 '>
                <a href="#" className='hover:underline'>Hindi</a>
                <a href="#" className='hover:underline'>English</a>
                <a href="#" className='hover:underline'>Bengali</a>
                <a href="#" className='hover:underline'>Urdu</a>
                <a href="#" className='hover:underline'>Punjabi</a>
                <a href="#" className='hover:underline'>Tamil</a>
                <a href="#" className='hover:underline'>Marathi</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home