import React from 'react'

export default function ActiveList(props) {
  const { activities } = props

  return (
    <div className='left'>
      {
        activities.map(item => {
          return (
            <div className='pageTwoBox' key={item.eventId + Math.random().toFixed(6)}>
              <img className='isImage' src={item.eventImagePath} alt="" />
              <div className='gameText'>{`${item.eventDate} ${item.eventEndTime24hr}`}</div>
              <div className='text'>{item.eventName}</div>
              <div className='messageT'>{item.suburb}</div>
            </div>
          )
        })
      }
    </div>
  )
}
