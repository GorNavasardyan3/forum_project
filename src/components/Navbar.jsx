import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='hidden sm:flex xl:gap-10 sm:gap-3 xl:text-xl sm:text-md whitespace-nowrap'>
        <Link to={'/'} >Գլխավոր</Link>
        <Link to={'/shop'}>Խանութ</Link>
        <Link to={'/about'}>Մեր մասին</Link>
        {/* <Link to={'/community'}>Community</Link> */}
        <Link to={'/leaderboards'}>Առաջատարներ</Link>
    </nav>
  )
}

export default Navbar