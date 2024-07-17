import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
function PostBlock() {
    
    return(
        <div className='w-11/12 h-[99px] flex items-center second_bg_color rounded-xl my-4 box-shadow'>
            <div className=' flex w-full px-2'>
                <img src="/images/avatar.png" alt="" className=' w-14 h-14'/>
                <div>
                    <h4 className=' font-semibold text-base'>Amon007</h4>
                    <p className=' font-semibold text-xs brown_color'>6h ago</p>
                </div>
            </div>

            <div className='w-full px-6'>
                <div>
                    <h3 className=' font-semibold text-2xl'>Hello World</h3>
                </div>
                <div className=' flex'>
                    <div className='light-first-bg-color p-1 rounded-md second_color'>Programming</div>
                    <div className='flex items-center px-2'>
                        <FontAwesomeIcon icon={faThumbsUp} className='primary-first-color h-[25px] w-[25px] px-1'/>
                        <p>10</p>
                    </div>
                    <div className='flex items-center px-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='primary-third-color h-[25px] w-[25px] px-1'/>
                        <p>10</p>
                    </div>
                </div>
            </div>

            <div className='w-full px-2'>
                <div className=' w-52 h-8 flex justify-around items-center rounded-xl neutral-first-bg-color'>
                    <FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2 fourth_color'/>
                    <p className=' fourth_color'>Add response</p>
                    <div className='primary-first-bg-color w-5 h-6 flex justify-center items-center rounded-r-md'>
                        10
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostBlock;