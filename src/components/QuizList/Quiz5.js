import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Button, Progress } from 'antd';

export default function Quiz5() {
  const [percent, setPercent] = useState(80);
  const [q1Ans, setQ1Ans] = useState("")

  const updateAnsAndSytle = (evt) => {
    if (evt.target.id !== q1Ans) {
      setQ1Ans(evt.target.id.toString())

      let questions = JSON.parse(window.localStorage.questions);
      questions['5'] = evt.target.id.toString();
      window.localStorage.questions = JSON.stringify(questions);


      if (percent === 80) {
        setPercent(100)
      }
    }
  }


  const navigate = useNavigate()

  const goQuiz4 = () => {
    navigate('/Quiz4');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  const goResult = () => {

    if (q1Ans == '') {
      updateAnsAndSytle({
        target: {
          id: 0
        }
      })
    }

    navigate('/QuizResult');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='questionbox ml-at'>
      <div className='question'>
        <div style={{ width: '10%' }}>
          <div className='backbutton' onClick={goQuiz4}></div>
        </div>
        <div style={{ width: '90%' }}>
          <div className='fz-24b'>5. When floods and storms come, do you think you need to turn off the hot water heater (electric or gas)？</div>
        </div>
      </div>

      <div className='row2box'>
        <div className='answer'>
          <div className='fz-18ans mt-40'><img id="1" className={q1Ans == "1" ? 'selectioncircle--green' : 'selectioncircle--gray'} onClick={updateAnsAndSytle}></img> Yes, I do.</div>
          <div className='fz-18ans mt-40'><img id="0" className={q1Ans == "0" ? 'selectioncircle--green' : 'selectioncircle--gray'} onClick={updateAnsAndSytle}></img> No, I don't. </div>
        </div>
        <div className='pBox'>
          <Progress type="circle" strokeColor="#fca100" percent={percent} />
        </div>
      </div>
      <div className='bottombox mt-40'>
        <div className='fz-16' style={{ width: '500px' }}>Tip: Turn off the hot water heater; Don't walk in a flooded basement if the power is still on or could go on.</div>
        <div className='fz-18green bottombar' style={{ marginLeft: '80px' }}>Question 5/5</div>
        <Button className='fz-14btn' onClick={goResult} style={{ width: "70px", height: '45px', marginLeft: '40px', backgroundColor: "#FCA100", borderRadius: '8px' }}>Finish</Button>
      </div>
    </div>
  )
}