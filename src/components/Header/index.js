import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './index.css'


export default function Header() {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  // function back() {
  //   navigate(-1)
  // }
  // function go() {
  //   navigate(1)
  // }

  const goHomepage = () => {
    navigate('/Homepage')
  }

  return (
    <div className='isHeader'>

      <div className='isHeader_left' onClick={goHomepage}>
        <div className='isLogo'></div>
        <div className='LoginName'>Chario.</div>
      </div>
      <div className='isHeader_right'>
        <NavLink className={({ isActive }) => { return pathname === '/Home' ? 'isActive' : 'isHeader_right_menu' }} to="/Home">Home</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/Charities' ? 'isActive' : 'isHeader_right_menu' }} to="/Charities">Charities</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/Calculator' ? 'isActive' : 'isHeader_right_menu' }} to="/Calculator">Calculator</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/Disasters' ? 'isActive' : 'isHeader_right_menu' }} to="/Disasters">Disasters</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/Education' ? 'isActive' : 'isHeader_right_menu' }} to="/Education">Education</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

