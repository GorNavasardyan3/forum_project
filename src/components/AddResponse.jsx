import React from 'react'
import Button from '../ui/Button'

function AddResponse() {
  return (
    <div className=' w-full flex flex-col items-center text-white sm:p-8 p-4'>
        <div className=' lg:w-[60%] w-full'>
            <div>
                <div className=' flex justify-between w-full'>
                    <div className=' flex items-center gap-2 '>
                        <img src="/images/avatar.png" className='h-[55px] w-[55px]' alt="" />
                        <div>
                            <h3>Astronout</h3>
                            <p className=' text-xs opacity-50'>6h ago</p>
                        </div>
                    </div>
                    <div className=' w-[120px] flex justify-end'>
                        <Button text={'Front-end'}/>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className=' text-2xl font-semibold'>Front-end Development And Backend Developer</h2>
                        <p className=' font-bold my-4'>What Skills Do You Need to Become a Front End Developer?</p>
                        <p className='text-justify'>The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools.</p>
                        <p className=' mt-8 font-bold'>HTML</p>
                        <p className=''>HTML stands for HyperText Markup Language. HTML displays the content on the page like buttons, links, headings, paragraphs, and.</p>
                    </div>
                </div>
                <button className=' mt-4 flex items-end'>
                    <img src="/images/like.png" alt="" />
                    <span className=' text-sm'>10</span>
                </button>
            </div>
            <div className='third-bg-color p-1 mt-4 rounded-full'/>
            <div>
                <div className='mt-4 flex'>
                    <p className=' opacity-50 text-2xl'>Responses</p>
                    <span className='light-first-bg-color second_color font-bold h-[40px] p-3 flex justify-center items-center rounded-lg ml-4'>18</span>
                </div>
            </div>
            <div className=' third-bg-color rounded-lg mt-4 p-2 w-full'>
                <div className=' flex items-center'>
                    <img src="/images/avatar.png" className=' h-[40px] w-[40px]' alt="" />
                    <p className=' ml-2'>Ebayyou Anggoro</p>
                </div>
                <div className=' mt-4'>
                    <textarea placeholder='What are your comments ?' rows={3} className=' resize-none bg-transparent w-full p-2 outline-none'/>
                </div>
                <div className=' flex justify-end mr-3'>
                    <div className=' w-[150px] flex justify-end'>
                        <Button text={'Response'}/>
                    </div>
                </div>
            </div>
            <div className=' mt-4 border-b-2 border-black'>
                <div className=' flex items-center'>
                    <img src="/images/avatar.png" className='h-[40px]' alt="" />
                    <div className=' ml-2'>
                        <p>Ebayyou Anggoro</p>  
                        <p className=' opacity-50 text-xs'>6h ago</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='font-semibold'>Well this threads, is good</p>
                </div>
                <div className=' flex items-end my-2'>
                    <img src="/images/like.png" alt="" />
                    <p className=' text-sm'>10</p>
                </div>
            </div>
            <div className=' mt-4 border-b-2 border-black'>
                <div className=' flex items-center'>
                    <img src="/images/avatar.png" className='h-[40px]' alt="" />
                    <div className=' ml-2'>
                        <p>Ebayyou Anggoro</p>  
                        <p className=' opacity-50 text-xs'>6h ago</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className='font-semibold'>Well this threads, is good</p>
                </div>
                <div className=' flex items-end my-2'>
                    <img src="/images/like.png" alt="" />
                    <p className=' text-sm'>10</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddResponse