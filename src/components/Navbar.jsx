import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className=' flex gap-10 text-xl'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/community'}>Community</Link>
        <Link to={'/leaderboards'}>Leaderboards</Link>
    </nav>
  )
}

export default Navbar