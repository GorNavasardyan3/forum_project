import React, { useState } from 'react'

function Search() {
    const [showInput,setShowInput] = useState(false);
  return (
    <div className='lg:m-2 flex items-center fourth_bg_color rounded-md '>
        <button className='ml-2 flex justify-center items-center h-[30px] w-[30px]'
         onClick={() => setShowInput(!showInput)}>
          <img src="/images/search.png" className=' h-[30px] w-[30px]' alt="" />
        </button>
        <input type="text" placeholder='Որոնում...' className={showInput ?
         '  max-lg:w-0 text-xl w-full fourth_bg_color outline-none lg:p-2 p-1 rounded-md'
         : ' max-lg:w-0 text-xl w-full fourth_bg_color outline-none lg:p-2 p-1 rounded-md'
         } />
        <input type="text" placeholder='Որոնում...' className={showInput ?
         'lg:hidden  clip-box max-lg:w-0 text-xl w-full fourth_bg_color outline-none p-2 py-4'
         : 'lg:hidden  clip-box-closed max-lg:w-0 text-xl w-full fourth_bg_color outline-none p-2 py-4'
         } />
    </div>
  )
}

export default Search