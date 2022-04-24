import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate, NavLink, Outlet, useOutlet, Link, useLocation } from 'react-router-dom'
import './index.css'


export default function Header() {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  function back() {
    navigate(-1)
  }
  function go() {
    navigate(1)
  }
  return (
    <div className='isHeader'>

      <div className='isHeader_left'>
        <div className='isLogo'></div>
        <div className='LoginName'>Chario.</div>
      </div>
      <div className='isHeader_right'>
        <NavLink className={({ isActive }) => { return pathname === '/home' ? 'isActive' : 'isHeader_right_menu' }} to="/home">Home</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/aboutus' ? 'isActive' : 'isHeader_right_menu' }} to="/aboutus">About us</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/disasters' ? 'isActive' : 'isHeader_right_menu' }} to="/disasters">Disasters</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/charities' ? 'isActive' : 'isHeader_right_menu' }} to="/charities">Charities</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/QA' ? 'isActive' : 'isHeader_right_menu' }} to="/QA">Q&A</NavLink>

      </div>

      <Outlet />
    </div>
  )
}

