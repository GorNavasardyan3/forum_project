import React from 'react'
import Button from '../ui/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

function SidebarAsideMobile({mobileSidebarAside,setMobileSidebarAside}) {


  return (
    <div className={mobileSidebarAside ? 'md:left-[-500px] fixed h-[100vh] duration-300 top-0 left-0 bg-[#202433] overflow-scroll' : ' top-0 bg-[#202433] duration-300 fixed left-[-500px]'}>
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
        <div className=' third-color flex justify-center items-center h-[150px] w-[250px] rounded-xl m-4'>
            <Button text={'Login'}/>
        </div>
        <div className=' third-color m-4 rounded-xl text-white'>
            <div className=' flex justify-between p-2'>
                <h2>List of online users</h2>
                <button>
                    <img src="/images/profile2user.png" alt="" />
                </button>
            </div>
            <div className=' p-2'>
                <div className=' flex m-2'>
                    <div className=' bg-red-400 h-[40px] w-[40px] rounded-full'/>
                    <div className=' ml-4'>
                        <h3>Ebayyou Anggoro</h3>
                        <p className=' text-xs opacity-50' >user-1</p>
                    </div>
                </div>
                <div className=' flex m-2'>
                    <div className=' bg-red-400 h-[40px] w-[40px] rounded-full'/>
                    <div className=' ml-4'>
                        <h3>Ebayyou Anggoro</h3>
                        <p className=' text-xs opacity-50' >user-1</p>
                    </div>
                </div>
                <div className=' flex m-2'>
                    <div className=' bg-red-400 h-[40px] w-[40px] rounded-full'/>
                    <div className=' ml-4'>
                        <h3>Ebayyou Anggoro</h3>
                        <p className=' text-xs opacity-50' >user-1</p>
                    </div>
                </div>
                <div className=' flex m-2'>
                    <div className=' bg-red-400 h-[40px] w-[40px] rounded-full'/>
                    <div className=' ml-4'>
                        <h3>Ebayyou Anggoro</h3>
                        <p className=' text-xs opacity-50' >user-1</p>
                    </div>
                </div>
                <div className=' flex m-2'>
                    <div className=' bg-red-400 h-[40px] w-[40px] rounded-full'/>
                    <div className=' ml-4'>
                        <h3>Ebayyou Anggoro</h3>
                        <p className=' text-xs opacity-50' >user-1</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-4'>
                <button className=' light-first-color'>see more</button>
            </div>
        </div>
        </aside>

        {/* Sidebar ================================================= */}
        <div className=' h-full flex flex-col justify-center items-center border-r border-[#999999]'>
            <Button text="Create Theam" />
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

    </div>
  )
}

export default SidebarAsideMobile