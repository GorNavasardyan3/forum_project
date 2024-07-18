import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
function PostBlock() {
    
    return(
        <div className='w-11/12 lg:h-[99px] max-lg:flex-col  flex max-lg:items-start items-center second_bg_color rounded-xl my-4 box-shadow'>
           <div className=' flex flex-col items-center lg:flex-row w-full'>
            <div className=' flex w-full p-2 justify-start'>
               <div className=' flex'>
                <img src="/images/avatar.png" alt="" className='w-14 h-14'/>
                <div>
                    <h4 className=' font-semibold text-base'>Amon007</h4>
                    <p className='flex items-center font-semibold text-xs brown_color whitespace-nowrap'>6h ago  <div className='max-lg:mx-1 ml-1 light-first-bg-color p-1 rounded-md second_color text-xs'>Programming</div></p>
                </div> 
               </div>
            </div>
            <div className=' px-2 py-1 w-full'>
                <h3 className='mx-2 text-md font-semibold inline-block'>Hello World Bla bla bal bal balblalb</h3>
            </div>
            <div className='w-full  p-2 mb-2'>
                <div className=' flex max-lg:justify-between'> 
                    <div className='flex items-center px-2'>
                        <FontAwesomeIcon icon={faThumbsUp} className='primary-first-color h-[25px] w-[25px] px-1'/>
                        <p>10</p>
                    </div>
                    {/* <div className='flex items-center px-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='primary-third-color h-[25px] w-[25px] px-1'/>
                        <p>10</p>
                        </div> */}
                    <div className=' px-2 flex justify-around items-center rounded-xl neutral-first-bg-color'>
                        <FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2 fourth_color'/>
                        <p className=' fourth_color'>Պատասխանել</p>
                        <div className='mx-1 primary-first-bg-color w-5 h-6 flex justify-center items-center rounded-r-md'>
                            10
                        </div>
                    </div>
                </div>
            </div>
            </div>
{/* 
            <div className='w-full px-2'>
                <div className=' w-52 h-8 flex justify-around items-center rounded-xl neutral-first-bg-color'>
                    <FontAwesomeIcon icon={faEnvelope} className='h-[25px] w-[25px] pr-2 fourth_color'/>
                    <p className=' fourth_color'>Add response</p>
                    <div className='primary-first-bg-color w-5 h-6 flex justify-center items-center rounded-r-md'>
                        10
                    </div>
                </div>
            </div>
             */}
        </div>
    )
}

export default PostBlock;