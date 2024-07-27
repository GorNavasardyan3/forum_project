import React, { useState } from 'react'
import Login from './MenuComponents/Login.jsx' 
import ListUsers from './MenuComponents/ListUsers.jsx'
import LoginModal from './LoginModal.jsx';

function Aside() {
  return (
    <aside className=' max-xl:hidden block w-[300px] h-full p-2 my-4'>
        <Login />
        
        <ListUsers />
    </aside>
  )
}

export default Aside