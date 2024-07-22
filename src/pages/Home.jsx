import React from 'react'
import PostBlock from '../components/PostBlock'
import Button from '../ui/Button'

function Home() {
  return (
    <div className=' text-white w-full h-full flex flex-col justify-center items-center'>
      <div className=' max-lg:flex my-4 w-full hidden justify-center second_bg_color'>
        <div className=' flex justify-around w-11/12'>
          <div className=' w-full'>
            <Button text="Create Theam"></Button>
          </div>
          <div className=' w-full flex justify-end'>
            <button className=' border-2 inline-block whitespace-nowrap overflow-hidden text-center border-[#D1CAFF] light-first-color w-4/5 h-9 rounded-md my-3 font-semibold text-base'>Open Category</button>
          </div>
        </div>
      </div>
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
    </div>
  )
}

export default Home