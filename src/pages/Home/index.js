import React from 'react'
import { useNavigate, useOutlet } from 'react-router-dom'
import Sport from '../../components/Sport'
import './index.css'
import CountUp from "react-countup";

export default function Home() {

  const navigate = useNavigate()

  const goCharities = () => {
    navigate('/Charities')
  }

  const goCalculator = () => {
    navigate('/Calculator');
    window.scrollTo({
      top:0,
    });
  }

  const goDisaster = () => {
    navigate('/Disasters');
    window.scrollTo({
      top:0,
    });
  }

  const goEducation = () => {
    navigate('/Education');
    window.scrollTo({
      top:0,
    });
  }


  console.log('@@@', useOutlet())
  const [sum, setSum] = React.useState(1)


  return (
    <div className='hpcontainer'>
      {/* 头部 */}
      {/* <Header /> */}
      {/* 内容 */}

      {/* <div className='tworoundArrBg'></div> */}
      <div className='isMain'>
        <div className='oneroundArrBg'></div>
        <div className='isImg'></div>
        <div className='isRight'>
          <div>
            <h1 className='fz-64'>Chario connects</h1>
            <h1 className='fz-64'>charities to the </h1>
            <h1 className='fz-64'>community.</h1>
            <div className='mt-40Text'>Australia has always been a country prone to natural disasters, with many people displaced by the effects of natural disasters. Chario hopes to provide enough information to help both donors and victims.</div>
          </div>
          <div className='isRight_btn cli' onClick={goCharities}>Help now</div>
        </div>
        <div className='isOneRoundArr'></div>
      </div>

      {/* 中间部分 */}
      <div className='isCenter'>
        {/* <div className='threeroundArrBg'></div> */}
        {/* 中间左侧 */}
        <div className="isCenter_left">
          <div className='fz-16g'>OUR SOLUTIONS</div>
          <h1 className='fz-40z'>What information will Chario offer to you？</h1>
          <div className='mt-32Text fz-16 colorBlack'>
          Chario is a website focused on helping victims of natural disaster in Australia. It can help donors find legitimate charities to do their part and also help victims find the relief programs they can get help with. 
          </div>
        </div>

        {/* 中间右侧 */}
        <div className='isCenter_right'>
          {/* 右侧的左侧部分 */}
          <div className='isCenter_right_leftItem cli' >
            <div className='isCenter_right_item bgShadow' onClick={goCalculator}>
              <img className='isIcon isNoMt' src={require("../../assets/images/leftone.png")} />
              <h2 className='mt-32 fz-24 fm-raleway'>Calculator</h2>
              <div className='mt-30Text fz-16 lh150 pr-10' style={{color:"#666666"}}>Here you can find out how much money can help a victim live for how many days (food), it is also possible to calculate how much it will cost to help how many victims for how many days.</div>
            </div>
          <div className='isCenter_right_item bgShadow mt-20 cli' onClick={goCharities}>
            <img className='isIcon isNoMt' src={require("../../assets/images/lefttwo.png")} />
            <h2 className='mt-32 fz-24 fm-raleway'>Charities</h2>
            <div className='mt-30Text fz-16 lh150' style={{color:"#666666"}}>Australia official registered charities focus on providing assistance programs to victims of natural disasters.</div>
          </div>
          </div>
          {/* 中间的右侧的右侧部分 */}
          <div className='isCenter_right_rightItem '>
            <div className='isCenter_right_item isCenter_right_itemR bgShadow cli' onClick={goDisaster}>
              <img className='isIcon isNoMt' src={require("../../assets/images/rightone.png")} />
              <h2 className='mt-32 fz-24 fm-raleway'>Disasters</h2>
              <div className='mt-30Text fz-16 lh150' style={{color:"#666666"}}>Information on natural disasters that frequently occur in Australia <br></br>as well as recent specific disasters.</div>
            </div>
            <div className='isCenter_right_item bgShadow mt-20 cli' onClick={goEducation}>
              <img className='isIcon isNoMt' src={require("../../assets/images/righttwo.png")} />
              <h2 className='mt-32 fz-24 colorBlack fm-raleway'>Education</h2>
              <div className='mt-30Text fz-16 lh150' style={{color:"#666666"}}>Here you can get information on how to prepare for natural disasters in advance; what to do when disaster strikes; what to do after disaster.</div>
            </div>
          </div>


        </div>
      </div>

      {/* Disaster display 部分*/}
     
      <div className='isImpact'>
        {/* <div className='fourroundArrBg'></div> */}
        <div className="left">
          <div className='fz-16g'>SITUATION</div>
          <div className='fz-40z fm-raleway mt-16'>Impacts of <br></br>natural disasters<br></br> in Australia</div>
        </div>
        <div className='right'>
          <div className='isrow'>
            <div className='isGroup'>
            <div className='num'>12</div>      
            <div className='fz-14'>Disasters in a year</div>
            </div>
            <div className='isGroup ml-60' >
            <div className='num' style={{textAlign:"right"}}><CountUp start={0} end={375} duration='6'/>K</div>
            <div className='fz-14' style={{paddingLeft:'30px'}}>People affected</div>
            </div>
            <div className='isGroup ml-60' style={{textAlign:"right"}}>
            <div className='num' ><CountUp start={0} end={19} duration='3'/>K</div>
            <div className='fz-14'>Economic losses</div>
            </div>
          </div>
          <div className='fz-14 mt-24'>Australia is a country with frequent natural disasters. Many people are affected by natural disasters every year. They were either displaced or suffered economic losses. Helping the victims is the kind of care that our large community should provide.</div>
        </div>
      </div>

      {/* Disaster display 部分*/}
      <div className='isWaiting'>
        <div className="left">
          <div className='fz-16g'>LEARN ABOUT</div>
          <div className='isWaitingText'>Waiting for your help</div>
          <div className='fz-16 colorBlack lh150'>Different natural disasters can obviously affect people in different ways. Click on the pictures below to see more information.</div>
        </div>
      </div>


      {/* 活动*/}
      <Sport />
      {/* <Outlet /> */}

    </div>
  )
}
