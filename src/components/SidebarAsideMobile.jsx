import React from 'react'
import Button from '../ui/Button.jsx'
import CreateTheam from './MenuComponents/CreateTheam.jsx'
import Login from './MenuComponents/Login.jsx' 
import ListUsers from './MenuComponents/ListUsers.jsx'
import Category from './MenuComponents/Category.jsx'
import Leaders from './MenuComponents/Leaders.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

function SidebarAsideMobile({mobileSidebarAside,setMobileSidebarAside}) {


  return (
    <div className={mobileSidebarAside ? ' md:left-[-500px] fixed z-[10] h-[100vh] duration-300 top-0 left-0 bg-[#202433] overflow-scroll' : ' top-0 bg-[#202433] duration-300 fixed z-[10] left-[-500px]'}>
        <div className=' flex justify-between p-4'>
            <div className='flex items-center p-2 text-white'>
                <FontAwesomeIcon className='mr-2 h-[30px] w-[30px]' icon={faSackDollar}/>
                <p>forum</p>
            </div>
            <button onClick={() => setMobileSidebarAside(false)}>
                <img src="/images/close.png" alt="" className=' h-[30px]' />
            </button>
        </div>
        {/* Aside ==================================================== */}

        <aside className=' block w-[300px] p-2'>
            
            <CreateTheam />

            <Login />

            <Category />

            <ListUsers />

            <Leaders />

        </aside>

    </div>
  )
}

export default SidebarAsideMobile