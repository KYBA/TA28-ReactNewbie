import React from 'react'
import './index.css'

export default function ActiveList(props) {
  const { activities } = props

  // const gowebsite = () => {
  //   {item.charityWebsite}
  // }
 
  return (
    <div className='caleft'>
      {
        activities.map(item => {
          return (
            <div className='charityboxs listshadow'  onClick={() => {window.open(item.charityWebsite)}} key={item.charityId + Math.random().toFixed(10)}>
              <div ml-26>
                {/* <span></span> */}
                <div className='fz-16c ml-26 mt-16'>{item.charityName}</div>
                <div className='fz-16b ml-26'>Age of Charity: {item.charityAge}</div>
                <div className='fz-16b ml-26'>Website: {item.charityWebsite}</div>
                <div className='bot ml-16 mt-24 mb-16'>
                  <div className='isSpot mt-8'></div>
                  <div className='fz-16d'>Size: {item.charitySize}</div>
                  <div className='isSpot mt-8'></div>
                  <div className='fz-16d'>Location: {item.state.replace('[', '').replace(']', '')}</div>
                </div>
              </div>
            </div>           
          )
        })
      }
    </div>
  )
}