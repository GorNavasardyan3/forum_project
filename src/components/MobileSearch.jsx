import React from 'react'

function MobileSearch() {
  return (
    <div className='m-2 p-2 flex items-center fourth_bg_color rounded-md'>
        <button className=' flex justify-center items-center h-[30px] w-[30px]'>
          <img src="/images/search.png" className=' h-[30px] w-[30px]' alt="" />
        </button>
        <input type="text" placeholder='Որոնում...' className=' text-xl w-full fourth_bg_color outline-none ml-2 p-2 rounded-md' />
    </div>
  )
}

export default MobileSearch