import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar';

function Header() {
  const [mobileMenuButton, setMobileMenuButton] = useState(false);

  return (
    <header className='second_bg_color text-white '>
      <div className='flex items-center sm:justify-around justify-between 2xl:container 2xl:mx-auto'>
        <div className='flex items-center ml-10'>
          <div className='p-2 flex items-center justify-between sm:w-fit w-[50vw]'>
            <i className='sm:m-2'>
              <FontAwesomeIcon className='xl:h-10 xl:w-10 sm:h-8 sm:w-8 h-[30px] w-[30px]' icon={faSackDollar} />
            </i>
            <p>Forum</p>
          </div>
          <div className='m-2 lg:flex hidden items-start fourth_bg_color rounded-md'>
            <div className='p-2'>
              <img src="/images/search.png" className='xl:h-[30px] xl:w-[35px] sm:h-[25px] sm:w-[25px]' alt="" />
            </div>
            <input type="text" placeholder='Որոնում...' className='text-xl xl:w-full sm:w-[200px] fourth_bg_color outline-none ml-2 p-2 rounded-md' />
          </div>
        </div>

        <Navbar setMobileMenuButton={setMobileMenuButton} mobileMenuButton={mobileMenuButton}/>
        <MobileNavbar setMobileMenuButton={setMobileMenuButton} mobileMenuButton={mobileMenuButton}/>
        <div className='mr-2 p-2 sm:flex hidden gap-4'>
          <button className='bells-shadow'>
            <img src="/images/bell.png" className='xl:h-[35px] xl:w-[35px] h-[28px] w-[28px]' alt="" />
          </button>
          <button>
            <img src="/images/smsnotification.png" className='xl:h-[20px] xl:w-[20px] h-[16px] w-[16px]' alt="" />
          </button>
        </div>
        <div className='block sm:hidden p-4'>
          <button onClick={() => setMobileMenuButton(!mobileMenuButton)}>
            <img src="/images/openmobilemenubtn.png" className='h-[20px] w-[20px]' alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
