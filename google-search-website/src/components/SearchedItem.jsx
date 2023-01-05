import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';

const SearchedItem = ({ data }) => {
  const createMarkup = (html) => {
    return { __html: html };
  }
  return (
    <div className='flex flex-col py-3 max-w-[700px]'>
      <div className='group cursor-pointer' onClick={() => window.open(data.link, "_blank")}>
        <div className='flex gap-x-4 items-center'>
          <div className='text-sm truncate text-[#202124]'>{data.formattedUrl}</div>
          <BsThreeDotsVertical />
        </div>
        <div className='group-hover:underline text-xl text-[#1a0dab] pt-2'>{data.title}</div>
      </div>
      <div className='text-sm text-[#4d5156] leading-6 pt-1' dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}/>
    </div>
  )
}

export default SearchedItem