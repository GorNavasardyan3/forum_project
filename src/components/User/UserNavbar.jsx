import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Threads from './Threads';
import Settings from './Settings';

function UserNavbar() {
    const [getNavigationCount, setNavigationCount]=  useState(0)
    const [getNavigationId, setNavigationId]=  useState('threads')
    const [getWidth, setWidth] = useState(0)
    const [getPositionLeft, setPositionLeft] = useState(0)

    const navigations = {
        0: <Threads/>,
        1: <Settings/>,
    }

   

    useEffect(() => {
        if(getNavigationId){
            const element = document.getElementById(getNavigationId)
            setPositionLeft(element.offsetLeft)
    
            setWidth(element.clientWidth);
   
        }
    }, [getNavigationId])

    return(
        <div className=' relative w-4/5 border-b-4 border-[#33394F]'>
            <div className='py-3'>
                <button id="threads" onClick={()=>{setNavigationCount(0); setNavigationId("threads")}} className='pr-3'>Threads</button>
                <button id="settings" onClick={()=>{setNavigationCount(1); setNavigationId("settings")}}>Settings</button>
            </div>
            <div className=" duration-200 absolute bg-[#7B61FF]  h-2" style={{width: `${getWidth}px`, left:`${getPositionLeft}px`}}></div>
            {navigations[getNavigationCount]}
        </div>
    )
}

export default UserNavbar;