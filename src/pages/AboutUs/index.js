import React from 'react'
import {Navigate,NavLink,Outlet,useOutlet} from 'react-router-dom'
import './index.css'

export default function Home() {
  console.log('@@@',useOutlet())
  // const [sum,setSum] = React.useState(1)
  return (
    <div className='container'>
      <div className='charitybox listshadow'>
        <div ml-26>
          <div className='fz-16c ml-26 mt-16'>Charity name 1</div>
          <div className='fz-16b ml-26'>Age of Charity: </div>
          <div className='fz-16b ml-26'>Website:</div>
          <div className='bot ml-26 mt-24'>
            <div className='isSpot mt-8'></div>
            <div className='fz-16d'>Size: Large</div>
            <div className='isSpot mt-8'></div>
            <div className='fz-16d'>Location: Victoria</div>
          </div>
        </div>
      </div>
    


    </div>
  )
}
