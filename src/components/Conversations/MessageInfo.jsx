import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function MessageInfo({message}) {

  return (
    <div className='w-full h-10 flex justify-between border-b border-neutral-800'>
        <div className='px-2'><h3 className='text-white'>{message.userName}</h3></div>
        <div className='px-2 flex  items-start'><p className='text-white px-2'>Կայքում էր {message.time} </p> <button className='text-white'><FontAwesomeIcon icon={faEllipsisH} /></button> </div>
    </div>
  )
}

export default MessageInfo;