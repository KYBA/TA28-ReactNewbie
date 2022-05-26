import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import { InputNumber, Button, Select, message} from 'antd';
import './index.css'

export default function Caculater() {
  const { Option } = Select;

  const [money, setMoney] = useState('');
  const [result, setResult] = useState('');

  const [peoplNum, setPeoplNum] = useState('');
  const [days, setDays] = useState('');
  const [result2, setResult2] = useState('');


  message.config({
    duration: 3,// 持续时间
    maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
    top: 300,// 到页面顶部距离
   });

  return (
    <div>
      <div className='headbox ml-at'>
        <div className='headleft'>
          <div className='img-row'>
            <div className='w3-third'>
              <img className='pd-10' src={require("../../assets/images/milk.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Bread.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Cheese.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Rice.jpg")} style={{width:"100%"}}/>            </div>
            <div className='w3-third'>
              <img className='pd-10' src={require("../../assets/images/ChickenFillets.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Beef.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Fruits.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Tomatoes.jpg")} style={{width:"100%"}}/>
            </div>
            <div className='w3-third'>
              <img className='pd-10' src={require("../../assets/images/Eggs.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Onion.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Lettuce.jpg")} style={{width:"100%"}}/>
              <img className='pd-10' src={require("../../assets/images/Potatoes.jpg")} style={{width:"100%"}}/>
            </div>
          </div>
        </div>
        <div className='mt-40 headright'>
          <div className='fz-16cal'>Calculator</div>
          <div className='fz-48 mt-20'>Help you understand your donation</div>
          <div className='fz-16 mt-20'>When donating to an emergency situation, 
          it’s useful to consider how far your donation is actually going. With this calculator, 
          you can see how long someone could survive based on the amount of money that you send to them.
          Our calculators are based on the data available at <a href='https://www.numbeo.com/food-prices/country_result.jsp?country=Australia' target="_blank">Numbeo</a>, 
          using average food prices across Australia and based on an assumption of 2400 calories per person, per day. 
          </div>
        </div>
      </div>

      <div className='calboxone'>
        <div className='fz-48 txtct mt-80'>How many people you can support</div>
        <div className='fz-17 ml-at txtct mt-20' style={{width:'586px',height:'50px'}}>Use this calculator to find out how many days your donation will help a victim meet basic needs.</div>
        <div className='resbox0 ml-at mt-20'>
          <div className='fz-14grey'>Money you want to donate</div>
        </div>
        <div className='resbox1 ml-at'>
          <div className='mt-10'> <InputNumber min={0} placeholder=' $14 for one day' value={money} onChange={(val) => {
            if (val <= 0) {
              message.error('money must > 0');
              setMoney('');
              return;
            }
            setMoney(val)
          }}
          style={{width:'200px',height:'40px',lineHeight:"40px"}}/></div>
          <div className='mt-10' style={{paddingLeft:'60px'}}> <Button onClick={() => {setResult(money)}} type="primary" 
            style={{background: "#FCA100",width:'200px',height:'40px'}} className='fz-18wh'>Calculate</Button></div>
        </div>
        <div className='resbox2 fz-28g mt-20'>
        Can help 1 person for&nbsp;<span className='fz-100'>{Math.floor(result/14)}</span>&nbsp;days.
        </div>
        <div className='fz-17 txtct mt-20'>An extra A$14 to help her/him one more day.</div>
      </div>


      <div className='calboxone'>
        <div className='fz-48 txtct mt-80'>How much money victims need</div>
        <div className='fz-17 ml-at txtct mt-20' style={{width:'586px',height:'50px'}}>You can also use this calculator to see how much money 
                it would take to support any number of people for a given amount of time in days.</div>
        <div className='resbox3 ml-at'>
          <div className='chidbox1 mt-40'>
            <div className='fz-14grey'>Numbers of people</div>
            <div className='mt-10'>
            <InputNumber placeholder='0' value={peoplNum} onChange={(val) => {
              if (val <= 0) {
                message.error('money must > 0');
                setMoney('');
                return;
              }
              setPeoplNum(val)}} 
              style={{width:'195px',height:'40px',lineHeight:"40px"}}/>
            </div>
          </div>
          <div className='chidbox2 mt-40'>
            <div className='fz-14grey'>Time period</div>
            <div style={{paddingTop:'10px'}}>
            <Select value={days} placeholder="time" size='large' onChange={(val) => {
              setDays(val)
              }} style={{width:'200px'}}>
              <Option  value={1}>ona day</Option>
              <Option  value={7}>a week</Option>
              <Option  value={30}>a month</Option>
            </Select>
            </div>
          </div>
          <div className="mt-40" style={{paddingLeft:'20px',paddingTop:'24px'}}>
            <Button onClick={() => {
              // Result
              setResult2(Math.floor(peoplNum * 14 * days))
            }} style={{background: "#FCA100",width:'200px',height:'40px'}} type="primary" className='fz-18wh'>Calculate</Button>
          </div>
        </div>
        <div className='resbox2 fz-28g mt-60'>
        You need to donate&nbsp;<span className='fz-100'>{Math.floor(result2/1)}</span>&nbsp;Australian dollars.
        </div>
        <div className='fz-17 txtct mt-20'>An extra A$14 to help her/him one more day.</div>
      </div>


      <Outlet />
    </div>
  )
}