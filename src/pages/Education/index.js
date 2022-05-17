import React, { useState } from 'react'
import {useNavigate,Outlet,useOutlet} from 'react-router-dom'
import './index.css'

export default function ABoutus() {
  console.log('@@@',useOutlet())
  const [visOption, setVisOption] = useState("1")

  const updateVisOption = (evt) =>{
    if(evt.target.id !== visOption){
      setVisOption(evt.target.id.toString())
      console.log(visOption)
    }
  }

  const navigate = useNavigate()

  const goQuiz = () => {
    navigate('/Quiz');
    window.scrollTo({
      top:0,
    });
  }

  
  return (
    <div className='educontainer ml-at'>
      {/* 标题部分 */}
      <div className='eduheadbox'>
        <div className='eduleftbox'>
          <div className='fz-64 colorBlack'>Don't panic when disaster strikes.</div>
          <div className='fz-16 mt-30'> Natural disasters often cause personal and financial hardship for both individuals and communities, and can result in loss of life. Here are some tips on how to be prepared, and how to cope during and after extreme weather events.
          <br></br>Natural disasters in Australia can include heatwaves, bushfires, droughts, floods, severe storms and tropical cyclones, earthquakes, tsunamis and landslides.</div>
        </div>
        <img className='headpic1' src={require("../../assets/images/eduhead1.jpg")}></img>
        <img className='headpic2' src={require("../../assets/images/eduhead2.jpg")} style={{height:'576px',marginLeft:'16px'}}></img>
      </div>

      {/* disaster */}
      <div className='edudisbox ml-at'>
        <div className='fz-16g mt-40'>DISASTER INFO</div>
        <div className='fz-40 ml-at txtct mt-20' style={{width:"885px"}}>What natural disasters are you likely to encounter in Australia?</div>
        <div className='edudis8 mt-40'>
          <div className='fourth'>
            <img src={require("../../assets/images/edu1.jpg")}></img>
          </div>
          <div className='fourth1'>
            <div className='fz-22poppins'>Bushfire</div>
            <div className='fz-17 mt-20'>A bushfire is an unplanned vegetation fire. It is a generic term that includes grass fires, forest fires and scrub fires. </div>
          </div>
          <div className='fourth'>
            <img src={require("../../assets/images/edu2.jpg")}></img>
          </div>
          <div className='fourth1'>
            <div className='fz-22poppins'>Earthquakes</div>
            <div className='fz-17 mt-20'>An earthquake (also known as a quake, tremor or temblor) is the result of a sudden release of energy in the Earth's crust that creates seismic waves. </div>
          </div>
          <div className='fourth1'>
            <div className='fz-22poppins'>Flooding</div>
            <div className='fz-17 mt-20'>The consequences of sea level rise for Australia will include the flooding of low lying     coastal and tidal areas with increased regularity.</div>
          </div>
          <div className='fourth'>
            <img src={require("../../assets/images/edu3.jpg")}></img>
          </div>
          <div className='fourth1'>
            <div className='fz-22poppins'>Storms</div>
            <div className='fz-17 mt-20'>Extreme rainfall events are projected to increase in intensity, potentially resulting in an increase in flood risks. </div>
          </div>
          <div className='fourth'>
            <img src={require("../../assets/images/edu4.jpg")}></img>
          </div>
        </div>
      </div>

      {/* before during after */}
      <div className='edubdabox ml-at' id='info'>
        <div className='fz-16g mt-40'>TIPS</div>
        <div className='fz-40 ml-at txtct mt-20'>What should you do in a natural disaster?</div>
      
        <div className='selectbox ml-at'>
          <a  className='fz-24select hover-green colorBlack txtct' href="javascript:void(0)" onClick={updateVisOption} >
            <div id="1" style={{width:'100px',cursor:'pointer'}}>Before</div>
          </a>
          <a  className='fz-24select hover-green colorBlack txtct' href="javascript:void(0)" onClick={updateVisOption}>
            <div id="2" style={{width:'100px',cursor:'pointer'}}>During</div>
          </a>
          <a  className='fz-24select hover-green colorBlack txtct' href="javascript:void(0)" onClick={updateVisOption}>
            <div id="3" style={{width:'100px',cursor:'pointer'}}>After</div>
          </a>
        </div>

          {visOption === '1' && (
          <div className='infoarea'>
            <div className='infoleftbox'>
              <div className='infobox mt-20'>
                <label className="drop1 fz-24" for="_1">Keep important information</label>
                <input id="_1" type="checkbox"/> 
                <div className='fz-16' style={{color:"#1F6256"}}>1.Get or update your insurance, store important documents in a safe place other than your home: such as<br></br>
                - Birth certificates, IDs, and others are protected from immediate water or fire damage.<br></br> 
                2.Record any contact details and account numbers for services such as:<br></br>
                - Your home insurance provider<br></br>
                - Emergency Services<br></br>
                - Your bank (or however you access money)<br></br>
                - Anything else you believe to be important<br></br>
                </div>
              </div>
              <div className='infobox mt-20'>
                <label className="drop1 fz-24" for="_2">Prepare an Emergency Kit</label>
                <input id="_2" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>Prepare an emergency kit so you don’t need to think about assembling one if you have to suddenly leave home.<br></br>
                Include items such as:<br></br>
                - Battery powered radio and spare batteries<br></br>
                - Torch<br></br>
                - First Aid Kit<br></br>
                - Money and credit cards<br></br>
                - Medications<br></br>
                - Important Documents<br></br>
                - Mobile phone and charger<br></br>
                - Blankets
                </div>
              </div>              
            </div>
            <div className='inforightbox'>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_3">Know your nearest emergency shelter</label>
                <input id="_3" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>If your home is at risk of a bushfire, you should plan a route to your closest neighbourhood safer place (NPS).<br></br> 
                  For specific local refuges, you may need to contact your local council to find the location<br></br>
                  <br></br>
                  Bushfires VIC:<br></br>
                  <a onClick={() => {window.open("https://www.cfa.vic.gov.au/home/local-information")}}>https://www.cfa.vic.gov.au/home/local-information</a><br></br>
                  <br></br>
                  Bushfires NSW & ACT:<br></br>
                  <a onClick={() => {window.open("https://www.rfs.nsw.gov.au/plan-and-prepare/neighbourhood-safer-places")}}>https://www.rfs.nsw.gov.au/plan-and-prepare/neighbourhood-safer-places</a>
                </div>
              </div>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_4"> Weather and disaster alerts</label>
                <input id="_4" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>You can check the <a onClick={() => {window.open("http://www.bom.gov.au/")}}>Australian Bureau</a> of Meteorology website for weather warnings.<br></br>
                Tune into your radio or TV for live updates. You might also hear the <a onClick={() => {window.open("https://www.nsw.gov.au/resilience-nsw")}}>Standard Emergency Warning Signal (SEWS)</a>, a distinctive siren that is broadcast over radio or television before an urgent safety message.<br></br>
                You may receive emergency warnings on your phone. <a onClick={() => {window.open("https://www.emergencyalert.gov.au/")}}>Emergency Alert</a> is the government-funded national telephone-based warning system that makes calls to landlines and texts to mobile phones. You do not need to register to receive these warnings.
                </div>
              </div>
            </div>

          </div>
          )}
          {visOption === '2' && (
            <div className='infoarea'>
            <div className='infoleftbox'>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_4">Call emergency services</label>
                <input id="_4" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>Call triple zero (000) in life-threatening 
                emergencies and for bushfires.<i><b className='colorBlack'>If calling triple zero (000) does not work on your mobile phone, 
                try 112.</b></i>  For emergency help during any other natural disaster such as a flood, storm or tsunami, 
                contact your State Emergency Service (SES) on  <i><b className='colorBlack'>132 500.</b></i>
                </div>
              </div>       
            </div>
            <div className='inforightbox'>
            <div className='infobox mt-20'>
                <label className="drop fz-24" for="_5">Where to find more information</label>
                <input id="_5" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>This website has some general tips for preparing for any disaster:<br></br> 
                  <a onClick={() => {window.open("https://nlr.com.au/articles/prepping-tips-for-natural-disasters")}}>https://nlr.com.au/articles/prepping-tips-for-natural-disasters</a>
                </div>
              </div>
            </div>
          </div>
          )}
          {visOption === '3' && (
            <div className='infoarea'>
            <div className='infoleftbox'>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_1">Managing your finances</label>
                <input id="_1" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>If you have experienced a disaster, 
                there are free financial counselling services available at 
                The National Debt Helpline (1800 007 007) and the Financial Counselling Foundation.
                </div>
              </div>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_2">Government financial support</label>
                <input id="_2" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>The government administers emergency relief funds depending on eligibility.
                 If you choose not to contact a financial counselling service, you can directly claim disaster relief payments from the government here.<br></br>
                 <a onClick={() => {window.open("https://www.disasterassist.gov.au/getting-help")}}>https://www.disasterassist.gov.au/getting-help</a>
                </div>
              </div>              
            </div>
            <div className='inforightbox'>
            <div className='infobox mt-20'>
                <label className="drop fz-24" for="_3">Find services in your area</label>
                <input id="_3" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>There are many services available to help people with disaster relief. You can find services in your area by following the prompts at the government’s recovery connect website:<br></br>
                <a onClick={() => {window.open("https://recovery.serviceconnect.gov.au/")}}>https://recovery.serviceconnect.gov.au/</a>
                </div>
              </div>
              <div className='infobox mt-20'>
                <label className="drop fz-24" for="_4">Managing your emotion</label>
                <input id="_4" type="checkbox"/> 
                <div className='fz-16'  style={{color:"#1F6256"}}>It can be overwhelming dealing with the impact of a natural disaster in your life. Dealing with all the material issues requiring attention, it can be easy to forget to look after your mental and emotional wellbeing. 
                If you need help, or just want someone to talk to, Lifeline offers a helpline at <a onClick={() => {window.open('https://www.lifeline.org.au/')}}><u>13HELP</u></a> that you can call for support.
                </div>
              </div>
            </div>
            
          </div>

          )}
    </div>

    <div className='quizbox '>
      <div className='quizleft'>      
        <div className='fz-32Inter'>Check to see if you are prepared for a disaster.</div>
        <div className='fz-24Inter mt-20'>In order to face natural disasters, it is useful to prepare some items at home.</div>
      </div>
      {/* 点击跳转到quiz */}
      <img onClick={goQuiz} src={require("../../assets/images/quizbutton.jpg")} 
      style={{width:'157px',height:'40px',marginTop:'96px',marginLeft:'170px',borderRadius:'4px',cursor:'pointer'}}></img>
    </div>



      <Outlet/>
    </div>
  )
}
