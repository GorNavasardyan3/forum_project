import React from 'react'

function Leaders() {

    return (
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
    )
}

export default Leaders;