import React from 'react'
import {Navigate,NavLink,Outlet,useOutlet} from 'react-router-dom'
import './index.css'

export default function ABoutus() {
  console.log('@@@',useOutlet())
  // const [sum,setSum] = React.useState(1)




  
  return (
    <div className='container'>
      {/* <div className='charitybox listshadow'>
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
      </div> */}

      {/* who we are */}
      <div className="txt-center t3-padding-64">
        <span className="fz-24 fm-raleway t3-bottombar border-dark-grey t3-padding-16">Who We Are</span>
      </div>


      <div className='row-padding'>
        <div className="t3-five t3-margin-bottom ml-2half">
          <div className="t3-card-4">
          <a onClick={()=>this.scrollToAnchor('james')}></a>
          <img className='photo' src={require("../../assets/images/james.jpg")} alt="James"/>
            <div className="t3-container">
              <h3>Yu Lei</h3>
              <p className="t3-opacity">FrontEnd & UI design</p>
              <div className='mbt-24'>
              <p>Master of Data science, I am from China, I like sports and I am willing to learn new things.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t3-five t3-margin-bottom ml-2half">
          <div className="t3-card-4">
          <img className='photo' src={require("../../assets/images/yiwen.jpg")} alt="James"/>
            <div className="t3-container">
              <h3>Yiwen Bai</h3>
              <p className="t3-opacity">FrontEnd & UI design</p>
              <div className='mbt-24'>
              <p>Master of Data science, I am from China, I like sports and I am willing to learn new things.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t3-five t3-margin-bottom ml-2half">
          <div className="t3-card-4">
          <img className='photo' src={require("../../assets/images/yuxin.jpg")} alt="James"/>
            <div className="t3-container">
              <h3>Yuxin Hu</h3>
              <p className="t3-opacity">FrontEnd & UI design</p>
              <div className='mbt-24'>
              <p>Master of Data science, I am from China, I like sports and I am willing to learn new things.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t3-five t3-margin-bottom ml-2half">
          <div className="t3-card-4">
          <img className='photo' src={require("../../assets/images/dom.jpg")} alt="James"/>
            <div className="t3-container">
              <h3>Dominic</h3>
              <p className="t3-opacity">FrontEnd & UI design</p>
              <div className='mbt-24'>
              <p>Master of Data science, I am from China, I like sports and I am willing to learn new things.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t3-five t3-margin-bottom ml-2half">
          <div className="t3-card-4">
          <img className='photo' src={require("../../assets/images/avinash.jpg")} alt="James"/>
            <div className="t3-container">
              <h3>Avinash</h3>
              <p className="t3-opacity">FrontEnd & UI design</p>
              <div className='mbt-24'>
              <p>Master of Data science, I am from China, I like sports and I am willing to learn new things.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Outlet/>
    </div>
  )
}
