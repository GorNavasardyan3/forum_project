import React from 'react'
import CreateTheam from './MenuComponents/CreateTheam.jsx'
import Category from './MenuComponents/Category.jsx'
import Leaders from './MenuComponents/Leaders.jsx'
import Login from './MenuComponents/Login.jsx'
import ListUsers from './MenuComponents/ListUsers.jsx'
function Sidebar() {
    return (
        <div className='max-md:hidden h-full flex flex-col justify-center items-center  m-4 py-2 '>
            <CreateTheam/>

            <div className=' max-lg:block hidden'>
                <Login />
            </div>

            <Category />

            <Leaders />

            <div className=' max-lg:block hidden'>
                <ListUsers />
            </div>
            
        </div>
    )
}

export default Sidebar;