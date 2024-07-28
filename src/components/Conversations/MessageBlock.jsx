import React from 'react'

function MessageBlock({message}) {

  function shorterText(count, text){
    if(text.length <= count) {
      return text;
    }

    return text.slice(0, count) + '...';
  }

  return (
    <div className='w-full flex my-2'>

      <div>
        <img className=' w-12 h-12 rounded-md' src="/images/Profile.png" alt="User Avatar" />
      </div>

      <div className='p-1'>

        <h3 className='text-white'>{message.userName}</h3>

        <div className='flex '>
          <p className='text-white whitespace-nowrap'>{shorterText(11, message.message)} <span>{message.time}</span></p>
        </div>

      </div>

    </div>
  )
}

export default MessageBlock;