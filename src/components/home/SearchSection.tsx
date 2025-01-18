import React from 'react'
import InputItem from './InputItem'

const SearchSection = () => {
  return (
    <div className='rounded-xl p-2 md:p-6 shadow-lg '>
        <p className='font-bold text-xl'>Get a ride</p>
        <InputItem type='from' />
        <InputItem type='to' />
        <button className='bg-black text-white py-2 mt-4 rounded-lg w-full hover:bg-black/85 duration-200'>Search </button>      
    </div>
  )
}

export default SearchSection
