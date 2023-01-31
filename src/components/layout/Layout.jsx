import React from 'react'
import './Styles/layout.css'
import {Link} from 'react-router-dom'

export default function Layout() {
  return (
    <div className='principalContainer' >
        <h1 className='title'>Proyecto Individual Henry Countries</h1>
        <Link to='/home'>
          <button>Home</button>
        </Link>
    </div>
  )
}
