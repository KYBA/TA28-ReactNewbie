import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Button, Progress } from 'antd';

export default function Quiz2() {
  const [percent, setPercent] = useState(20);

  const [q1Ans, setQ1Ans] = useState("")

  const updateAnsAndSytle = (evt) => {
    if (evt.target.id !== q1Ans) {
      setQ1Ans(evt.target.id.toString())

      let questions = JSON.parse(window.localStorage.questions);
      questions['2'] = evt.target.id.toString();
      window.localStorage.questions = JSON.stringify(questions);

      if (percent == 20) {
        setPercent(40)
      }
    }
  }


  const navigate = useNavigate()

  const goQuiz1 = () => {
    navigate('/Quiz');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const goQuiz3 = () => {

    if (q1Ans == '') {
      updateAnsAndSytle({
        target: {
          id: 0
        }
      })
    }

    navigate('/Quiz3');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div className='questionbox ml-at'>
      <div className='question'>
        <div style={{ width: '10%' }}>
          <div className='backbutton' onClick={goQuiz1}></div>
        </div>
        <div style={{ width: '90%' }}>
          <div className='fz-24b'>2. Do you keep important information and insurance documents in a safe place?</div>
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
        <div className='fz-16' style={{ width: '500px' }}>Tip: keep your important documents secured in a watertight container.</div>
        <div className='fz-18green bottombar' style={{ marginLeft: '80px' }}>Question 2/5</div>
        <Button className='fz-14btn' onClick={goQuiz3} style={{ width: "70px", height: '45px', marginLeft: '40px', backgroundColor: "#FCA100", borderRadius: '8px' }}>Next</Button>
      </div>
    </div>
  )
}