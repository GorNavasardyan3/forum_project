import React from 'react'
import Login from './MenuComponents/Login.jsx' 
import ListUsers from './MenuComponents/ListUsers.jsx'

function Aside() {
  return (
    <aside className=' max-xl:hidden block w-[300px] p-2 border-l border-[#999999]'>
        <Login />
        
        <ListUsers />
    </aside>
  )
}

export default Aside