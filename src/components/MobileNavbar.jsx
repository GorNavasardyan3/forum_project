import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import MobileSearch from './MobileSearch'

function MobileNavbar({mobileMenuButton,setMobileMenuButton}) {
  return (
    <div className={mobileMenuButton ? 'sm:left-[-100vw] fixed top-0 left-0 z-[10] duration-300 flex justify-between flex-col h-[100vh] w-full second_bg_color'
        : 'fixed top-0 left-[-100vw] z-[10] duration-300 flex justify-between flex-col h-[100vh] w-full second_bg_color'
    }>
        <div>

            <div className=' flex justify-between p-4'>
                <div className='flex items-center p-2'>
                    <FontAwesomeIcon className='mr-2 h-[30px] w-[30px]' icon={faSackDollar}/>
                    <p>forum</p>
                </div>
                <button onClick={() => setMobileMenuButton(false)}>
                    <img src="/images/close.png" className=' h-[35px] w-[35px]' alt="" />
                </button>
            </div>
            <MobileSearch/>
        </div>

        <div className=' flex flex-col text-xl gap-4 p-4'>
            <Link onClick={() => setMobileMenuButton(false)} to={'/home'} >Home</Link>
            <Link onClick={() => setMobileMenuButton(false)} to={'/shop'}>Shop</Link>
            <Link onClick={() => setMobileMenuButton(false)} to={'/about'}>About</Link>
            <Link onClick={() => setMobileMenuButton(false)} to={'/community'}>Community</Link>
            <Link onClick={() => setMobileMenuButton(false)} to={'/leaderboards'}>Leaderboards</Link>
        </div>
        <div className=' flex justify-between p-4'>
            <div>
                <p className=' text-sm opacity-40'>Talk to me</p>
                <h3>navasardyangor1@gmail.com</h3>
            </div>
            <div>
                <button>
                    <img src="/images/mob_nav_contact.png" className=' h-[40px] w-[45px]' alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavbar