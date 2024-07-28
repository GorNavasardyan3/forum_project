import React from 'react'
import LoginCard from '../components/LoginCard'

function LoginPage() {
  return (
    <div className=' p-4 h-[100vh] flex sm:flex-row flex-col text-white'>
        <div className='h-full rounded-xl sm:w-[50%] bg-gradient-to-br from-[#C277DC] to-[#58ECF5]'>
            {/*  TODO : Add logical and beautiful content */}
        </div>
        <div className=' flex flex-col justify-center items-center h-full sm:w-[50%]'>
            <div className=' sm:w-[300px] md:w-[380px]'>
                <div className=' p-2'>
                    <h2 className=' text-3xl'>Մուտք</h2>
                    <p className='text-gray-400'>You can login with your registered account or quick login with your Google account.</p>
                </div>
                <div className=' w-full p-2'>
                    <button className=' bg-white text-black flex w-full justify-center items-center p-2 rounded-lg mt-2'>
                        <img src="/images/google_logo.png" className=' h-[30px] w-[30px]' alt="" />
                        <p>Մուտք գործեք google-ով</p>
                    </button>
                </div>
                <div className=' flex justify-center items-center p-2'>
                    <div className=' border-t border-gray-500 w-full'/>
                    <p className=' p-2 mb-2 text-lg'>կամ</p>
                    <div className=' border-t border-gray-500 w-full '/>
                </div>
                <LoginCard/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage