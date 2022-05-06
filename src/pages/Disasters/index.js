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
        Natural disasters happened in Australia
        </div>
      </div>
      {/* 标题下小文字 */}
      <div className='tipbox ml-at'>
        <div className = 'dis-16' style={{width:"1010px"}}>
        Australia has a long history of natural disasters, 
        including bushfires, floods, earthquakes, storms, cyclones and landslides. 
        Natural disasters have been particularly damaging in recent years,
         both in terms of loss of life and economic impact.
        </div>
      </div>
    {/* 五个灾难 */}
    <div className='ml-at dis-box' style={{marginTop:"60px"}}>
      {/* left */}
      <img className='img' src={require("../../assets/images/disfire.jpg")}/>
      {/* right */}
      <div className='ml-57'>
        <div className='rightlil fz-12 mt-24'>
          <div>NEWS</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>6 December 2019</div>
        </div>
        <div className='mt-16 fz-32'>New South Wales bushfires: 'Mega blaze' warning near Sydney</div>
          <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>
            More than 2,000 firefighters are battling bushfires, which escalated in intensity 
            late on Thursday.  Australia's largest city has been blanketed by thick smoke all week, 
            causing a rise in medical problems. Since October, bushfires have killed six people and 
            destroyed more than 700 homes across Australia. The severity of the blazes so early in the 
            fire season has caused alarm, and prompted calls for greater action to tackle climate change.
          </div>
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
          <div>NEWS</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>1 April 2022</div>
        </div>
        <div className='mt-16 fz-32'>Australia floods: More rain adds to struggle of rebuilding</div>
          <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>
          Lismore, Australia – In late February, torrential rain hit the northern part of the Australian state of 
          New South Wales, submerging the region under raging floods.
          Now – with residents still attempting to rebuild – the area has been hit again, leaving many in despair.
          “Everyone was still raw from the other one, and it’s not as if the town had [been] repaired … there’s
           still quite a few thousand condemned homes and people displaced everywhere.”
          </div>
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
          <div>NEWS</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>25 January 2022</div>
        </div>
        <div className='mt-16 fz-32'>'The windows were shaking':  4.7 magnitude earthquake hitting WA town</div>
          <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>
          In the Wagin area alone there have already been more than 60 earthquakes this year, 
          with experts warning the seismic activity is far from over.It was not possible to know 
          if this morning's earthquake was going to be the peak of the swarm, ms Pejic said. 
          In the first hour after the earthquake, more than 500 reports were submitted by the public,
          GA said.By 6.38am, an aftershock with a preliminary magnitude of 3.6 had been recorded by 
          GA's National Earthquake Alerts Centre.
          </div>
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
          <div>NEWS</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>20 April 2022</div>
        </div>
        <div className='mt-16 fz-32'>113mm overnight: Emergency alerts, flood warning after deluge</div>
          <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>
          An emergency alert has been issued this morning for areas west of Brisbane due to ongoing flash 
          flooding and heavy rainfall as Queenslanders are being warned a late-season cyclone is still likely
          to form over the Coral Sea this week.
          </div>
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
          <div>NEWS</div>
          <div className='ml-8' style={{color:"#CCCCCC",marginLeft:"8px"}}>27 January 2022</div>
        </div>
        <div className='mt-16 fz-32'>Storm destroys homes, damages infrastructure on flood-hit Eyre Peninsula</div>
          <div className='dis-16 mt-24' style={{color:"#666666",width:'450px'}}>
          Homes have been destroyed and trees stripped of leaves by a severe storm that tore through parts of South
           Australia's Eyre Peninsula just days after flooding rains.
          The Bureau of Meteorology recorded almost 50 millimetres of rainfall at the Port Lincoln airport, 
          to the south, in about five hours on Wednesday night.
          </div>
        <div className='helpbtn'>
        {/* <div className='help mt-24 bottombar border-green'>Read More</div> */}
        </div>
      </div>
    </div>


  </div>
  )
}