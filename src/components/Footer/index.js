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

  const goQuiz = () => {
    navigate('/Quiz');
    window.scrollTo({
      top:0,
    });
  }

  const gohome = () => {
    navigate('/home');
    window.scrollTo({
      top:0,
    });
  }
  
  const gocharities = () => {
    navigate('/charities');
    window.scrollTo({
      top:0,
    });
  }

  const godisasters = () => {
    navigate('/disasters');
    window.scrollTo({
      top:0,
    });
  }

  const goCalculator = () => {
    navigate('/Calculator');
    window.scrollTo({
      top:0,
    });
  }

  const goeducation = () => {
    navigate('/education');
    window.scrollTo({
      top:0,
    });
  }


  return (
    <div className="footer">
    <div>
      <dl>
        <dt className='mt-38' style={{fontWeight:"700"}}>Navigate</dt>
        <dt className='mt-38' style={{cursor:'pointer'}} onClick={gohome}>Home</dt>
        <dt className='mt-20footer' onClick={gocharities}>Charities</dt>
        <dt className='mt-20footer' onClick={goCalculator}>Calculator</dt>
        <dt className='mt-20footer' onClick={godisasters}>Disasters</dt>
        <dt className='mt-20footer' onClick={goeducation}>Education</dt>
        <dt className='mt-20footer' onClick={goQuiz}>Quiz</dt>
      </dl> 
    </div>
    <div className='ml-100'> 
      <dl>
        <dt className='mt-38' style={{fontWeight:"700"}}>Data Support</dt>
        <dt className='mt-38' style={{cursor:'pointer'}} onClick={() => {window.open('https://www.acnc.gov.au/')}} >Australian Charities and Not-for-profits Commission (ACNC) </dt>
        <dt className='mt-38' style={{cursor:'pointer'}} onClick={() => {window.open('https://www.homeaffairs.gov.au/')}} >Australian Goverment/Department of Home Affairs</dt>
      </dl>
    </div>

    <div className='ml-100'>
      <div className='footer_btn'>
      <div className='mt-38' style={{fontWeight:"700"}}>Our Website Designer</div>
        <div className='btnArr mt-38'>
          <div className='ft_btn'>YW</div>
          <div className='ft_btn'>YL</div>
          <div className='ft_btn'>YX</div>
          <div className='ft_btn'>DW</div>
          <div className='ft_btn'>AP</div>
        </div>
        <div className='mt-38'>  Copyright© 2022 DAY3 Group </div> 
      </div>
    </div>
  </div>
  )
}

