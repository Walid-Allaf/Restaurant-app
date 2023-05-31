import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

const ButtonWithIcon = ({ styles, title, onClick, icon }) => {
  return (
    <div
      className={`bg-teal-50 p-2 rounded-full border border-gray-500 font-bold cursor-pointer text-teal-900 flex flex-1 items-center justify-between gap-2 ${styles}`}
      onClick={ onClick }
      >
      <MdKeyboardArrowDown className='text-black font-medium' />
      <p>{ title }</p>
      {
        icon === 'star'
        ? <AiFillStar className='text-black' />
        : <BsFillCreditCard2BackFill className='text-black' />
      }
      
    </div>
  )
}

export default ButtonWithIcon
