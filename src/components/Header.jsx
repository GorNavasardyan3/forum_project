import { faBell, faMagnifyingGlass, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from './Navbar'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <header className='second_bg_color text-white flex items-center justify-around'>
      <div className=' flex items-center ml-10'>
        <div className='p-2 flex items-center'>
          <i className='m-2'>
            <FontAwesomeIcon className=' h-10 w-10' icon={faSackDollar}/>
          </i>
          <p>Forum</p>
        </div>
        <div className=' m-2 flex items-start fourth_bg_color rounded-md'>
          <div className=' p-2'>
            <img src="/images/search.png" className='h-[30px] w-[30px]' alt="" />
          </div>
          <input type="text" placeholder='Որոնում...' className='text-xl fourth_bg_color outline-none  ml-2 p-2 rounded-md' />
        </div>
      </div>
      <Navbar/>
      <div className=' mr-2 p-2 flex gap-4'>
        <button className='bells-shadow'>
          <img src="/images/bell.png" className=' h-[35px] w-[35px]' alt="" />
        </button>
        <button>
          <img src="/images/smsnotification.png" className=' h-[20px] w-[20px]' alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header