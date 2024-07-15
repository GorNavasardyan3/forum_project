import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='hidden sm:flex xl:gap-10 sm:gap-3 xl:text-xl sm:text-md'>
        <Link to={'/home'} >Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/community'}>Community</Link>
        <Link to={'/leaderboards'}>Leaderboards</Link>
    </nav>
  )
}

export default Navbar