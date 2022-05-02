import React from 'react'
import {Navigate,NavLink,Outlet,useOutlet} from 'react-router-dom'
import './index.css'

export default function Disasters() {
  console.log('@@@',useOutlet())
  // const [sum,setSum] = React.useState(1)
  return (
  <div>
      {/* 大标题 */}
      <div className = 'ml-at dis-header'>
        <div style={{width:"728px"}}>
        UX Case Study Exploration of  Ticket Application Events
        </div>
      </div>
      {/* 标题下小文字 */}
      <div className='tipbox ml-at'>
        <div className = 'dis-16' style={{width:"1010px"}}>
          Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further 
          the overall value proposition. Organically grow the holistic world view of disruptive 
          innovation via workplace diversity and empowerment.
        </div>
      </div>
    {/* 五个灾难 */}
    <div className='ml-at dis-box' style={{marginTop:"60px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/disfire.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>DEVELOPMENT</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>23 September 2020</div>
        </div>
        <div className='mt-16 fz-32'>How to make a website look more attractive with llustrations</div>
        <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>

    <div className='ml-at dis-box' style={{marginTop:"24px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/disflood.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>DEVELOPMENT</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>23 September 2020</div>
        </div>
        <div className='mt-16 fz-32'>How to make a website look more attractive with llustrations</div>
        <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>

    <div className='ml-at dis-box' style={{marginTop:"24px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/disearthquake.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>DEVELOPMENT</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>23 September 2020</div>
        </div>
        <div className='mt-16 fz-32'>How to make a website look more attractive with llustrations</div>
        <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>

    <div className='ml-at dis-box' style={{marginTop:"24px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/disstorm.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>DEVELOPMENT</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>23 September 2020</div>
        </div>
        <div className='mt-16 fz-32'>How to make a website look more attractive with llustrations</div>
        <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>

    <div className='ml-at dis-box' style={{marginTop:"24px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/diswind.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>DEVELOPMENT</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>23 September 2020</div>
        </div>
        <div className='mt-16 fz-32'>How to make a website look more attractive with llustrations</div>
        <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>


  </div>
  )
}