import React, { useState, useEffect } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Button, message, Progress } from 'antd';
import { submitQuestion } from '../../services/question';

export default function Result() {

    const navigate = useNavigate();
    const [questionVOs, setQuestionVOs] = useState([]);
    const [avgPercent, setAvgPercent] = useState(0);
    const [level, setLevel] = useState(0);
    useEffect(() => {
        // submitQuestion
        if (window.localStorage.questions) {
            let questions = JSON.parse(window.localStorage.questions);
            let dataArr = [];
            let trueNum = 0;
            for (let key in questions) {
                let bol = questions[key] == 1 ? true : false;
                if (bol) {
                    trueNum += 1;
                }
                dataArr.push({
                    question: `Question ${key}`,
                    answer: bol,
                })
            }
            setLevel(trueNum / 5);
            submitQuestion(dataArr).then((res) => {
                // console.log("res = ", res)
                let resData = res.data.data;
                setQuestionVOs(resData.questionVOs);
                setAvgPercent(resData.avgPercent);
            }).catch((err) => {
                message.error('netword error')
            })
        }


    }, [])

    const goEducation = () => {
        navigate('/Education');
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
    }
    console.log("level = ", level)

    let desc =['This number represents the percentage of households in our community that have a first aid kit. A first aid kit should include a flashlight, water, food, medicine and even communication tools. It should be used not only in case of a sudden illness, but also in case of a natural disaster. Of course we hope we never have to use it, but having a first aid kit is insurance for our future.'
    ,'This data represents whether important documents in the community are well stored. Every family may have many important documents, which can cause unnecessary trouble if lost or damaged. So important documents in every home should be stored, waterproof, and easily accessible to take away in a crisis.'
    ,'When a natural disaster strikes, trying to find an evacuation site is impractical and can waste time. Therefore, knowing the evacuation points in the community in advance can help the victims to escape and get timely help.'
    ,'Making an escape plan in advance can help victims get out of the house quickly and get what they need. People in emergency situations are likely to panic and leave behind. Making a plan in advance also allows people to cope with possible natural disasters more calmly.'
    ,'Turning off the water heater or any possible source of fire or power is a must. Because water is electrically conductive, this could make rescue difficult and could cause other secondary disasters.']

    return (
        <div className='rescontainer ml-at'>
            <div className='fz-48 txtct'>Your Results</div>
            <div className='rectanglebox'>
                <div className='fz-16grey mt-40'>The level of preparedness for disasters</div>
                <div>
                    <Progress percent={level.toFixed(2) * 100} strokeColor="#1F6256" />
                </div>
                <div className='fz-16grey mt-20'>Compare with the average</div>
                <div>
                    <Progress percent={avgPercent.toFixed(2) * 100} strokeColor="#fca100"/>
                </div>
            </div>
            <div className='analyzbox'>
                <div className='leftbox'>
                    <div className='fz-16g'> Analysis</div>
                    <div className='fz-48 mt-40'>Data analysis for your quiz results</div>
                    <div className='fz-16 mt-20'>Here you can see the average correct rate of all the people 
                    who took the test for each question, so you can compare your own score with 
                    the average score for each question. In addition, you can also understand the 
                    overall lack of our community through the average data, to help the community to improve. </div>
                </div>
                <div className='rightbox'>
                    {questionVOs.map((v, i) => {
                        return (
                            <div key={i} className='row'>
                                <div className='chart1'>
                                    <div className='pBox'>
                                        <Progress type="circle" strokeColor="#fca100" percent={Math.floor(v.percent.toFixed(2) * 100)} />
                                    </div>
                                </div>
                                <div className='explain'>
                                    <div className='fz-24'>Question {i + 1}</div>
                                    <div className='fz-16'>{desc[i]}</div>
                                </div>
                            </div>
                            
                        );
                    })}
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <Button className='fz-14btn' onClick={goEducation} style={{ height: '40px',marginTop:'40px', backgroundColor: '#1F6256', borderRadius: '8px' }}>Back to Education</Button>
            </div>

        </div>



    )
}