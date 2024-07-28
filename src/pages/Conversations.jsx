import React from 'react'
import MessageBlock from '../components/Conversations/MessageBlock';
import MessageContent from '../components/Conversations/MessageContent';
import MessageInfo from '../components/Conversations/MessageInfo';
import MessageSend from '../components/Conversations/MessageSend';

function Conversations() {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
         <div className='my-10 third-bg-color w-11/12 h-[75vh] p-2 flex   rounded-xl'>
            {/* Message bar */}
            <div className=' w-4/12 h-full border-r border-neutral-800'>
              <MessageBlock message={{userName: "Amon007", message:"Hello World", time:"10:00"}} />
              <MessageBlock message={{userName: "Gor777", message:"Chi lsvum ape", time:"08:00"}} />
              <MessageBlock message={{userName: "Valodik", message:"Dzeres arnum ape", time:"08:40"}} />
            </div>

            {/* Message */}
            <div className=' w-8/12 h-full flex flex-col'>
              <MessageInfo message={{userName: "Amon007", message:"Hello World", time:"10:00"}} />
              <MessageContent  message={[{name:"amon077",mess:"Hello World", avatar: '/images/Profile.png', time:"18:31"},{name:"Arina",mess:"Hajox",avatar: '/images/Profile2.jpg', time:"18:32"}]} />
              <MessageSend />
            </div>
        </div>
      </div>
    )
  }
  
export default Conversations;