import React from 'react'

function MessageContent({message}) {

const rightBlock = ""

return (
    <div className='w-full h-full '>
      {message.map((mess, index) => (
        <div key={index}>
            <div className='flex m-2'>
                    <div>
                        <img className='w-10 h-10 rounded-full mx-2' src={mess.avatar} alt="" />
                    </div>
                    <div>
                        <h3 className='text-white'>{mess.name} <span>{mess.time}</span></h3>
                        <p>{mess.mess}</p>
                    </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default MessageContent;