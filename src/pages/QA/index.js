import React, { useState } from 'react'
import { Navigate, NavLink, Outlet, useOutlet } from 'react-router-dom'
import { InputNumber, Button, Select, Divider } from 'antd';
import '../QA/index.css'

export default function Caculater() {
  const { Option } = Select;

  const [money, setMoney] = useState('');
  const [result, setResult] = useState('');

  const [peoplNum, setPeoplNum] = useState('');
  const [days, setDays] = useState('');
  const [result2, setResult2] = useState('');


  // const check = () =>{
  //   if ((Math.floor(money / 14))<0){
  //     false
  //     return 0
  //   }
  //   else{
  //     true
  //   }
  // }


  return (
    <div>
      <div className='backcolor1'>
        <div className='headbox ml-at'>
          <div className='mt-80 headleft'>
            <div className='ins-26'><b className='ins-40'>When </b>donating to an emergency situation, 
            it’s useful to consider how far your donation is actually going. With this calculator, 
            you can see how long someone could survive based on the amount of money that you send to them.
            Our calculators are based on the data available at <a href='https://www.numbeo.com/food-prices/country_result.jsp?country=Australia' target="_blank">Numbeo</a>, 
            using average food prices across Australia and based on an assumption of 2400 calories per person, per day. 
            </div>
          </div>
          <div className='headright'>
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
        </div>
      </div>




      <div className='backcolor mt-80 ml-at'>
        <div className='ml-at firstcalbox'>
          {/* left */}
          <div className='firstlilbox' style={{width:'450px'}}>
            <div className='headtext mt-80'>Donate</div>
            <div className='headtip mt-40'>Per day, it would cost approximately $14 AUD to feed an average person. Please enter the amount of money you were considering donating to see how long someone could buy food for with that donation.</div>
          </div>
          {/* right */}
          <div className='firstlilbox1 ml-50'>
            <div className='headtip mt-80'>Input a number you want to donate.</div>
            <div className='mt-24'> <InputNumber placeholder='$14 for one day' value={money} onChange={(val) => {setMoney(val)}}  style={{width:'150px',height:'40px',lineHeight:"40px",borderRadius:"8px"}}/></div>
            <div className='mt-24'> <Button onClick={() => {setResult(money)}} type="primary" 
            style={{background: "#FCA100",borderRadius:"8px"}}>Calculate</Button></div>
            <div className='headtip mt-40'>
            {result && result >= 14? (
              <div>
              Your money could help one victim for <span className='fz-24'>{Math.floor(result/14)}</span> days.
              </div>
            ):<div>Please enter a number greater than $14 AUD.</div>
            }
            </div>
          </div>
        </div>
      </div>

      <div className='backcolor mt-80 ml-at'>
        <div className='Secondcalbox ml-at'>
              <div className='onebox'>
                <div className='headtip2'>You can also use this calculator to see how much money 
                it would take to support any number of people for a given amount of time in days.</div>
                <div className='headtip mt-20'>How many victim you want to help?</div>
                <div>
                <InputNumber placeholder='Please input at least 1' value={peoplNum} onChange={(val) => {
                  setPeoplNum(val)}} style={{width:'200px',height:'40px',lineHeight:"40px",borderRadius:"8px"}}/>
                </div>
                <div className='headtip mt-24'>How many days do you want to help?</div>
                <div>
                <Select value={days} placeholder="时间" onChange={(val) => {
                  setDays(val)
                }} style={{width:'150px',height:'40px'}}>
                  <Option value={1}>ona day</Option>
                  <Option value={7}>a week</Option>
                  <Option value={30}>a month</Option>
                </Select>
                </div>
                <div className='mt-20'>
                  <Button onClick={() => {
                    // 计算结果
                    setResult2(Math.floor(peoplNum * 14 * days))
                  }} style={{background: "#FCA100",borderRadius:"8px"}} type="primary">Calculate</Button>
                </div>
              </div>
              <div className='resultbox resultbk'>
                <div className='pytext' style={{textAlign:'center',paddingTop:"60px"}}>Total amount is</div>
                <div className='resultnumbox'>
                  <div className='resultnum' style={{textAlign:'center'}}>{result2 && (<div>${result2}</div>)}</div>
                </div>
                <div className='resultbox2'>
                  <div className='resultbox3' >
                   <div className='pytext2'>Victim number</div>
                   <div className='orgtext'>{peoplNum}</div>
                  </div>
                  <div className='resultbox3'>
                   <div className='pytext2'>Days</div>
                   <div className='orgtext'>{days}</div>
                  </div>
                </div>
              </div>
        </div>
      </div>


      <div className='backcolor1 mt-80'>
        <div className='headbox ml-at'>
          <div className='headleftbt'>
          <img className='bdrd' src={require("../../assets/images/hands.jpg")} style={{width:"100%"}}/>
          </div>
          <div className='headrightbt'>
          <div className='ins-26' style={{padding:"48px"}}><b className='ins-40'>When </b> natural disasters strike,
           many people lose everything they have. Your generosity can have a huge impact. 
           When everyone gives a little, the communities will receive a big boost of support.
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Amout</h1>
      <div>
        <InputNumber placeholder='钱数' value={money} onChange={(val) => {
          setMoney(val)
        }} />
      </div>
      

      <div>
      <Button onClick={() => {
        // 计算结果
        setResult(Math.floor(money / 14))
      }} type="primary">Caculate</Button>
      </div>

      {result && (
        <div>
        You could help one victim for <span className='fz-24'>{result}</span> days.
        </div>
      )}


      

      <h1>How many victim you want to help</h1>
      <div>
        <InputNumber placeholder='人数' value={peoplNum} onChange={(val) => {
          setPeoplNum(val)
        }} />
      </div>

      <h1>How many days</h1>
      <div>
        <Select style={{
          width: 200
        }} value={days} placeholder="时间" onChange={(val) => {
          setDays(val)
        }}>
          <Option value={1}>ona day</Option>
          <Option value={7}>a week</Option>
          <Option value={30}>a month</Option>
        </Select>
      </div>
      
      <div>
      <Button onClick={() => {
        // 计算结果
        setResult2(Math.floor(peoplNum * 14 * days))
      }} type="primary">Calculate</Button>
      </div>

      {result2 && (
      <div> 
        ${result2}.
      </div>
      )} */}

      <Outlet />
    </div>
  )
}