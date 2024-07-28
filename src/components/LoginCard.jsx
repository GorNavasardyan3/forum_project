import React from 'react'
import Button from '../ui/Button'


function LoginCard() {
  return (
    <form>
        <div className="m-2">
            <p className=" text-gray-400">Էլ. հասցե</p>
            <input type="email" placeholder="navasardyangor1@gmail.com" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className="m-2">
            <div className=" flex justify-between">
                <p className=" text-gray-400">Գաղտնաբառ</p>
                <button className="light-first-color">Մոռացել եմ</button>
            </div>
            <input type="password" placeholder="********" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className=" m-2 text-gray-400 flex items-center gap-2">
            <input type="checkbox" className=" h-[15px] w-[15px]" />
            <p>Հիշիր</p>
        </div>
        <div className=" w-[100%] flex justify-center">
            <Button text={'Մուտք'}/>
        </div>
        <div className=" flex justify-center gap-2">
            <p className=" text-gray-400">Չունե՞ք հաշիվ </p>
            <a href='/registration' className=" light-first-color">Ստեղծել</a>
        </div>
    </form>
  )
}

export default LoginCard