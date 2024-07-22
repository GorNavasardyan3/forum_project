import React from 'react'

function BellAndSMS() {
  return (
    <>
    <div className=' mr-2 p-2 gap-4 flex items-center'>
        <button className='bells-shadow'>
            <img src="/images/bell.png" className='xl:h-[35px] xl:w-[35px] h-[28px] w-[28px]' alt="" />
        </button>
        <button>
            <img src="/images/smsnotification.png" className='xl:h-[20px] xl:w-[20px] h-[16px] w-[16px]' alt="" />
        </button>
    </div>
    </>
  )
}

export default BellAndSMS