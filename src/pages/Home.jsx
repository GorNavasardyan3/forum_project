import React from 'react'
import PostBlock from '../components/PostBlock'

function Home() {
  return (
    <div className='text-white w-full h-full flex flex-col justify-center items-center'>
      <PostBlock />
      <PostBlock />
      <PostBlock />
      <PostBlock />
    </div>
  )
}

export default Home