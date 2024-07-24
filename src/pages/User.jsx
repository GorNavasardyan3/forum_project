import React from 'react'
import Background from '../components/User/Background'
import Button from '../ui/Button';
import UserNavbar from '../components/User/UserNavbar';
function User() {
    return (
      <div className=' text-white w-full h-full flex flex-col justify-center items-center'>
        <Background/>
        <div className='w-4/5 py-12 flex justify-center items-center flex-col'>
            <h3 className=' text-2xl'>Amon007</h3>
            <p className=' text-sm'>Elit</p>
            <p className=' text-base my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <button className='light-first-bg-color w-36 rounded-md p-1 second_color m-1 font-bold'>Գրել</button>
            <button className=' bg-[#F02B5A] w-36 rounded-md p-1 second_color m-1 font-bold'>Բողոքել</button>
        </div>
        <UserNavbar/>
      </div>
    )
  }
  
export default User