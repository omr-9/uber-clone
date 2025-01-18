import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdLocationOn } from 'react-icons/md'

/*************  ✨ Codeium Command ⭐  *************/

const InputItem = ({type}:{type:string}) => {
  return (
    <div className='flex items-center gap-4 bg-slate-200 p-2 rounded-lg mt-3'>
      {type === 'from' ?<MdLocationOn />: <FaMapLocationDot /> }
        <input type='text' className='outline-none w-full bg-transparent' placeholder={type=='from' ? 'Pick up location' : 'Drop off location'} />
    </div>
  )
}

export default InputItem
