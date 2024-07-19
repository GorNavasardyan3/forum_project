import React from 'react'
import CreateTheam from './MenuComponents/CreateTheam.jsx'
import Category from './MenuComponents/Category.jsx'
import Leaders from './MenuComponents/Leaders.jsx'
function Sidebar() {
    return (
        <div className='max-md:hidden h-full flex flex-col justify-center items-center border-r border-[#999999]'>
            <CreateTheam/>
            <Category />
            <Leaders />
        </div>
    )
}

export default Sidebar;