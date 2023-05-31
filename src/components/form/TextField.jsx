import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';


const TextField = ({ name, id, placeholder, styles, onChange}) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        type="text"
        name={ name }
        id={ id }
        dir='rtl'
        className={`flex-1 w-full outline-none border-none focus:placeholder:opacity-0 ${styles} `}
        placeholder={ placeholder }
        onChange={ onChange }
      />

      {
        name === 'location'
        ? <MdLocationOn className='text-white bg-gray-900 text-[22px]' />
        : <FiSearch className='text-black text-[22px]' />
      }
    </div>
  )
}

export default TextField
