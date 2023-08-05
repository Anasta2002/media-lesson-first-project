import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './index.module.css'

export default function Navbar() {
  return (
    <div className={s.nav}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/info'}>Info</NavLink>
    </div>
  )
}

