import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Button from '../ui/Button'
function Sidebar() {
    return (
        <div className='max-md:hidden h-full flex flex-col justify-center items-center border-r border-[#999999]'>
            <Button text="Create Theam"></Button>
            <div className=' w-4/5 flex flex-col text-base text-white font-semibold'>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Profile</a>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Your Threads</a>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Saved</a>
            </div>
            <div className=' px-8 flex flex-col mt-5 text-white font-semibold'>
                <h3 className=' text-2xl py-5'>Top Leaderboards</h3>
                <div>
                    <div className=' flex justify-between py-1'>
                        <div className=' bg-yellow-300 w-11 h-11 rounded-md'></div>
                        <div className=' '>
                            <h4 className=' text-sm'>Ebayyou An</h4>
                            <p className=' text-xs brown_color'>ebay@gmail.com</p>
                        </div>
                        <div className=' bg-emerald-400 w-11 h-11 rounded-md flex justify-center items-center'>100</div>
                    </div>
                    <div className=' flex justify-between px-3 py-1'>
                        <div className=' bg-yellow-300 w-11 h-11 rounded-md'></div>
                        <div className=' '>
                            <h4 className=' text-sm'>Ebayyou An</h4>
                            <p className=' text-xs brown_color'>ebay@gmail.com</p>
                        </div>
                        <div className=' bg-emerald-400 w-11 h-11 rounded-md flex justify-center items-center'>100</div>
                    </div>
                    <div className=' flex justify-between py-1'>
                        <div className=' bg-yellow-300 w-11 h-11 rounded-md'></div>
                        <div className=''>
                            <h4 className=' text-sm'>Ebayyou An</h4>
                            <p className=' text-xs brown_color'>ebay@gmail.com</p>
                        </div>
                        <div className=' bg-emerald-400 w-11 h-11 rounded-md flex justify-center items-center'>100</div>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden'>
          <button className=' bg-red-950'>this button</button>
        </div>
        </div>
    )
}

export default Sidebar;