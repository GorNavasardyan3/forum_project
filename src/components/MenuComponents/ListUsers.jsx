import React from 'react'

function ListUsers() {

    return (
        <div className=' third-bg-color m-4 rounded-xl text-white'>
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
    )
}

export default ListUsers;