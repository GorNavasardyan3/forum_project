import { useState } from 'react';
import Button from '../../ui/Button';
import LoginModal from '../LoginModal';

function Login() {
    const [showLoginModal,setShowLoginModal] = useState(false)

    return(
        <div className=' third-bg-color  flex justify-center items-center h-[150px] w-[250px] rounded-xl m-4'>
            <div onClick={() => setShowLoginModal(true)} className=' w-full flex justify-center items-center'>
                <Button text={'Login'}></Button>
            </div>
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}/>
        </div>
    )
}

export default Login;