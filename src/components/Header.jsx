import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar';
import Search from './Search';
import BellAndSMS from './MenuComponents/BellAndSMS';


function Header() {
  const [mobileMenuButton, setMobileMenuButton] = useState(false);

  return (
    <header className='second_bg_color text-white '>
      <div className='flex items-center sm:justify-around justify-between 2xl:container 2xl:mx-auto'>
        <div className='flex items-center ml-10'>
          <div className='p-2 flex items-center justify-between sm:w-fit w-[50vw]'>
            <i className='sm:m-2'>
              <FontAwesomeIcon className='xl:h-8 xl:w-8 sm:h-6 sm:w-6 h-[30px] w-[30px]' icon={faSackDollar} />
            </i>
            <p><span className=' shadow-md transition duration-300'>F</span>ORUM</p>
          </div>
          <div className=' max-sm:hidden'>
            <Search/>
          </div>
        </div>

        <Navbar />
        <MobileNavbar setMobileMenuButton={setMobileMenuButton} mobileMenuButton={mobileMenuButton}/>
      
        <div className='flex'>
          <div className='sm:flex'>
            <BellAndSMS/>
          </div>
          <div className='flex sm:hidden p-4'>
          <button onClick={() => setMobileMenuButton(!mobileMenuButton)}>
            <img src="/images/openmobilemenubtn.png" className='h-[20px] w-[20px]' alt="" />
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
