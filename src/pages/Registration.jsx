import React from 'react'
import RegisterCard from '../components/RegisterCard'

function RegistrationPage() {
  return (
    <div className='p-4 h-[100vh] flex sm:flex-row flex-col text-white'>
        <div className='h-full rounded-xl sm:w-[50%] bg-gradient-to-br from-[#C277DC] to-[#58ECF5]'>
            {/*  TODO : Add logical and beautiful content */}
        </div>
        <div className=' flex flex-col justify-center items-center h-full sm:w-[50%]'>
            <div className=' sm:w-[300px] md:w-[380px]'>
                <div className=' p-2'>
                    <h2 className=' text-3xl'>Գրանցվել</h2>
                </div>
                <RegisterCard />
            </div>
        </div>
    </div>
  )
}

export default RegistrationPage