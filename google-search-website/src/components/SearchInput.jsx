import React, {useState} from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import {useNavigate, useParams } from 'react-router-dom'

import MicIcon from '../assets/mic.svg'
import ImageIcon from '../assets/image.svg'

const SearchInput = () => {
  const { query } = useParams(); //by using the useparam hook we can extract query form the url and display it on to the search box 
  const [searchQuery, setSearchQuery] = useState(query || '') // so if there is some query which comes from useParam use it and otherwise it will be empty
  const navigate = useNavigate();

  const SearchQueryHandler = (event) => {
    if(event.key === "Enter" && searchQuery.length > 0){
      navigate(`/${searchQuery}/${1}`)
    }
  }
  return (
    <div id='searchBox' 
    // focuswithin is a pesudo class in which when we click in an input section and our mouse go out but our focus will be there the css we want to show at that time we apply there
    className='h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0'>
      <AiOutlineSearch size={18} color='#9aa0a6'/>
      <input 
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={SearchQueryHandler}
        value={searchQuery}
        autoFocus
        className='grow outline-0 text-black/[0.87]'
      />
      <div className='flex items-center gap-3'>
        {/* show the close button when we are searching something */}
        {searchQuery && (
          <div className='flex gap-3 items-center'>
            <IoMdClose  size={24} color='#70757a' className='cursor-pointer' onClick={() => setSearchQuery('')}/>
            
          </div>
          
        )}
        <img src={MicIcon} alt="" className='h-6 w-6 cursor-pointer' />
        <img src={ImageIcon} alt="" className='h-6 w-6 cursor-pointer block md:hidden'/>
      </div>
    </div>
  )
}

export default SearchInput