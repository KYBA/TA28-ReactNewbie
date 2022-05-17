import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Button, Progress } from 'antd';


export default function Quiz1() {
  // new
  const [percent, setPercent] = useState(0);

  const [q1Ans, setQ1Ans] = useState("")

  const updateAnsAndSytle = (evt) => {
    if (evt.target.id !== q1Ans) {
      setQ1Ans(evt.target.id.toString())
      let questions = JSON.parse(window.localStorage.questions);
      questions['1'] = evt.target.id.toString();
      window.localStorage.questions = JSON.stringify(questions);
      // new
      if (percent == 0) {
        setPercent(20)
      }
    }
  }

  useEffect(() => {
    window.localStorage.questions = JSON.stringify({});
  }, [])


  const navigate = useNavigate()

  const goEducation = () => {
    navigate('/Education');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const goQuiz2 = () => {
    if (q1Ans == '') {
      updateAnsAndSytle({
        target: {
          id: 0
        }
      })
    }
    navigate('/Quiz2');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className=''>
      <div className='question'>
        <div style={{ width: '10%' }}>
          <div className='backbutton' onClick={goEducation}></div>
        </div>
        <div style={{ width: '90%' }}>
          <div className='fz-24b'>1. Do you have a first-aid kit at home?</div>
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
        <div className='fz-16' style={{ width: '500px' }}>Tip: Keep a first-aid kit at home to prepare for any kind of disaster.</div>
        <div className='fz-18green bottombar' style={{ marginLeft: '80px' }}>Question 1/5</div>
        <Button onClick={goQuiz2} className='fz-14btn' style={{ width: "70px", height: '45px', marginLeft: '40px', backgroundColor: "#FCA100", borderRadius: '8px' }}>Next</Button>
      </div>
    </div>
  )
}