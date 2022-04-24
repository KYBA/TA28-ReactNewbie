import React from 'react'
import { useNavigate, NavLink, Outlet, useOutlet } from 'react-router-dom'
// import Header from '../../components/Header'
import Sport from '../../components/Sport'
import './index.css'


export default function Home() {

  const navigate = useNavigate()
  const goCharities = () => {
    navigate('/Charities')
  }

  console.log('@@@', useOutlet())
  const [sum, setSum] = React.useState(1)
  return (
    <div className='container'>
      {/* 头部 */}
      {/* <Header /> */}
      {/* 内容 */}

      <div className='oneroundArrBg'></div>
      <div className='isMain'>
        <div className='tworoundArrBg'></div>
        <div className='isImg'></div>
        <div className='isRight'>
          <div>
            <h1 className='fz-64w'>Chario connects</h1>
            <h1 className='fz-64w'>charities to the </h1>
            <h1 className='fz-64w'>community.</h1>
            <div className='mt-40Text'>Australia has always been a country prone to natural disasters, with many people displaced by the effects of natural disasters. Chario hopes to provide enough information to help both donors and victims.</div>
          </div>
          <div className='isRight_btn' onClick={goCharities}>Help now</div>
        </div>
        <div className='isOneRoundArr'></div>
        <div className='isGreenBox'></div>
      </div>

      {/* 中间部分 */}
      <div className='isCenter'>
        <div className='threeroundArrBg'></div>
        {/* 中间左侧 */}
        <div className="isCenter_left">
          <div className='fz-16g'>OUR SOLUTIONS</div>
          <h1 className='fz-48'>What informations will Chario offer to you？</h1>
          <div className='mt-32Text fz-16 colorBlack'>
          Chario is a website focused on helping victims of natural disasters in Australia. It can help donors find legitimate charities to do their part and also help victims find the relief programs they can get help with.          </div>
          <div className='isBtn' onClick={goCharities}>Join now!</div>
          {/* <NavLink className='isBtn' to="/activites">Join now!</NavLink> */}
        </div>

        {/* 中间右侧 */}
        <div className='isCenter_right'>
          {/* 右侧的左侧部分 */}
          <div className='isCenter_right_leftItem'>
            <div className='isCenter_right_item bgShadow '>
              <img className='isIcon isNoMt' src={require("../../assets/images/leftone.png")} />
              <h2 className='mt-32 fz-24 fm-raleway'>About us</h2>
              <div className='mt-30Text fz-16 colorBlack lh150'>Integrate information from official charities to help donors avoid scams and help victims of natural disasters get quickly support.</div>
            </div>
            <div className='isCenter_right_item'>
              <img className='isIcon isNoMt' src={require("../../assets/images/lefttwo.png")} />
              <h2 className='mt-32 fz-24 fm-raleway'>Charities</h2>
              <div className='mt-30Text fz-16 colorBlack lh150'>Australia official registered charities focus on providing assistance programs to victims of natural disasters.</div>
            </div>
          </div>
          {/* 中间的右侧的右侧部分 */}
          <div className='isCenter_right_rightItem '>
            <div className='isCenter_right_item isCenter_right_itemR'>
              <img className='isIcon isNoMt' src={require("../../assets/images/rightone.png")} />
              <h2 className='mt-32 fz-24 fm-raleway'>Disaster infos</h2>
              <div className='mt-30Text fz-16 colorBlack lh150'>Information on natural disasters that frequently occur in Australia as well as recent specific disasters.</div>
            </div>
            <div className='isCenter_right_item'>
              <img className='isIcon isNoMt' src={require("../../assets/images/righttwo.png")} />
              <h2 className='mt-32 fz-24 colorBlack fm-raleway'>More...</h2>
              <div className='mt-30Text fz-16 colorBlack lh150'>As a public service website to provide infomations to help the community.</div>
            </div>
          </div>


        </div>
      </div>

      {/* Disaster display 部分*/}
     
      <div className='isImpact'>
        <div className='fourroundArrBg'></div>
        <div className="left">
          <div className='fz-16g'>SITUATION</div>
          <div className='fz-48 fm-raleway mt-16'>Impacts of natural disasters in Australia</div>
        </div>
        <div className='right'>
          <div className='isrow'>
            <div className='isGroup'>
            <div className='num'>12</div>
            <div className='fz-14'>Disasters in a year</div>
            </div>
            <div className='isGroup ml-60'>
            <div className='num'>375K</div>
            <div className='fz-14'>People affected</div>
            </div>
            <div className='isGroup ml-60'>
            <div className='num'>19K</div>
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
