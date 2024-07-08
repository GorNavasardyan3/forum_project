import { faBell, faMagnifyingGlass, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from './Navbar'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <header className='third-color text-white flex items-center justify-around'>
      <div className=' flex items-center ml-10'>
        <div className='p-2 flex items-center'>
          <i className='m-2'>
            <FontAwesomeIcon className=' h-10 w-10' icon={faSackDollar}/>
          </i>
          <p>Forum</p>
        </div>
        <div className=' m-2 flex items-center '>
          <FontAwesomeIcon className='h-[20px] w-[20px] ml-4' icon={faMagnifyingGlass} />
          <input type="text" placeholder='Որոնում...' className='text-xl third-color outline-none ml-2 p-2' />
        </div>
      </div>
      <Navbar/>
      <div className=' mr-2 p-2 flex gap-4'>
        <button>
          <FontAwesomeIcon icon={faBell} className='h-[20px] w-[20px]'/>
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelope} className='h-[20px] w-[20px]'/>
        </button>
      </div>
    </header>
  )
}

export default Header