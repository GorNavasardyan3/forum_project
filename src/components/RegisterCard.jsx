import React from 'react'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'

function RegisterCard() {
  return (
    <>
        <div className="m-2">
            <p className=" text-gray-400">Անուն</p>
            <input type="text" placeholder="Gor" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className="m-2">
            <p className=" text-gray-400">Էլ. հասցե</p>
            <input type="email" placeholder="navasardyangor1@gmail.com" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className="m-2">
            <p className=" text-gray-400">Գաղտնաբառ</p>
            <input type="password" placeholder="********" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className=" m-2 text-gray-400 flex items-center gap-2">
            <input type="checkbox" className=" h-[15px] w-[15px]" />
            <p>Համաձայնեք պայմանների հետ</p>
        </div>
        <div className=" w-[100%] flex justify-center">
            <Button text={'Գրանցվել'}/>
        </div>
        <div className=' flex justify-center'>
            <p>Ունե՞ք հաշիվ</p>
            <a href="/login" className='light-first-color ml-2'>Մուտք</a>
        </div>
    </>
  )
}

export default RegisterCard