import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/navbar.css'
import {GoHome} from 'react-icons/go'
import {GiDetour} from 'react-icons/gi'
import {FcAbout} from 'react-icons/fc'

export default function Navbar() {

  return (
    <div className='navbarMainContainer' >
        <section className='navButtons'>          
          <Link className='linkNav' to='/home'> <GoHome/> Home</Link>
          <Link className='linkNav' to='/activities'><GiDetour/> Activities</Link>
          <Link className='linkNav' to='/about'><FcAbout/> About</Link>
        </section>
    </div>
  )
}
