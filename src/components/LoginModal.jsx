import { faSackDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../ui/Button"
import LoginCard from "./LoginCard"

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
        <LoginCard/>
      </div>
    </div>
  )
}

export default LoginModal
