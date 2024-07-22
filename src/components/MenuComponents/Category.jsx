import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

function Category() {

    return (
        <div className='third-bg-color p-6 flex flex-col justify-center items-start w-[250px] rounded-xl m-4 text-white gap-1'>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Profile</a>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Your Threads</a>
                <a href="#" className=' flex items-center'><FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2'/> Saved</a>
        </div>
    )
}

export default Category;