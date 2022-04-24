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
    <div className="footer">
    <div>
      <dl>
        <dt className='mt-38'>Company</dt>
        <dt className='mt-38'>Monash University</dt>
        <dt className='mt-38'>Contact Us</dt>
      </dl> 
    </div>


    <div className='ml-100'> 
      <dl>
        <dt className='mt-38'>Data Support</dt>
        <dt className='mt-38'>National Charities and Non-profit Commission (NCNC) </dt>
        <dt className='mt-38'>Australian Charities and Not-for-profits Commission (ACNC) </dt>
        <dt className='mt-38'>Australian Goverment/Department of Home Affairs</dt>
      </dl>
    </div>

    <div className='ml-100'>
      <dl className='footer_btn'>
      <dt className='mt-38'>Our Website Designer</dt>
        <div className='btnArr mt-38'>
          <div className='ft_btn'>YW</div>
          <div className='ft_btn'>YL</div>
          <div className='ft_btn'>YX</div>
          <div className='ft_btn'>DW</div>
          <div className='ft_btn'>AP</div>
        </div>
          <div className=''>version 4.24</div>
      </dl>

    </div>
  </div>
  )
}

