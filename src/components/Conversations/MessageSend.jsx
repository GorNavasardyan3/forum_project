import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane  } from '@fortawesome/free-solid-svg-icons';

function MessageInfo({message}) {

  return (
    <div className='w-full flex items-center border-neutral-800'>
        <textarea type="text" className=' bg-zinc-800 w-full m-2 rounded-md border-none p-2 resize-none ' />
        <FontAwesomeIcon icon={faPaperPlane } />
    </div>
  )
}

export default MessageInfo;