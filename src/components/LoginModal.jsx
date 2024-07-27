import { faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../ui/Button"

function LoginModal({ showLoginModal, setShowLoginModal }) {
  return (
    <div className={`fixed top-0 left-0 h-full w-full bg-black/60 flex items-center justify-center duration-300 ${showLoginModal ? 'visible' : 'invisible'}`}>
      <div className={`${showLoginModal ? 'scale-100' : 'scale-0'} p-4 sm:rounded-lg duration-300 transform origin-center sm:w-[400px] sm:h-[420px] w-full h-full third-bg-color`}>
        <div className='flex justify-between p-4'>
          <div className='flex items-center p-2'>
            <FontAwesomeIcon className='mr-2 h-[30px] w-[30px]' icon={faSackDollar} />
            <p>forum</p>
          </div>
          <div className='flex'>
            <button onClick={() => setShowLoginModal(!showLoginModal)}>
              <img src="/images/close.png" className='h-[35px] w-[35px]' alt="" />
            </button>
          </div>
        </div>
        <div className="m-2">
            <p className=" text-gray-400">Email</p>
            <input type="email" placeholder="navasardyangor1@gmail.com" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className="m-2">
            <div className=" flex justify-between">
                <p className=" text-gray-400">Password</p>
                <button className="light-first-color">Forgot Password?</button>
            </div>
            <input type="password" placeholder="********" className=" fourth_bg_color w-full p-2 outline-none text-gray-400 rounded-md" />
        </div>
        <div className=" m-2 text-gray-400 flex items-center gap-2">
            <input type="checkbox" className=" h-[15px] w-[15px]" />
            <p>Remember me</p>
        </div>
        <div className=" w-[100%] flex justify-center">
            <Button text={'Login'}/>
        </div>
        <div className=" flex justify-center gap-2">
            <p className=" text-gray-400">Don't have an account ?</p>
            <button className=" light-first-color">Create one</button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
