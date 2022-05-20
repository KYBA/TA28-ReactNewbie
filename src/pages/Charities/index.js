import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Pagination } from 'antd';
import {
  getActivities,
  yearLevelList,
  sizeList,
  stateList,
} from '../../services/activities'
import { apiBaseUrl } from '../../services/api';
import ActiveList from '../../components/ActiveList'

export default function Activites() {

  const childRef = useRef(); //关键部分

  // const [searchValue, setSearchValue] = useState('')
  const [activities, setActivities] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [total, setTotal] = useState(1)
  const [yearLevelListEnum, setyearLevelListEnum] = useState(yearLevelList)
  const [stateListEnum, setstateListEnum] = useState(stateList)
  const [sizeListEnum, setsizeListEnum] = useState(sizeList)


  // const handelChange = (value) => {
  //   setSearchValue(value.target.value)
  // }

  const setyearCheck = (value) => {
    let list = yearLevelListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    // setPageNum(1)
    setyearLevelListEnum(list)
    handleEventSearch()
  }

  const setstateCheck = (value) => {
    let list = stateListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    // setPageNum(1)
    setstateListEnum(list)
    handleEventSearch()
  }

  const setsizeListCheck = (value) => {
    let list = sizeListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    // setPageNum(1)
    setsizeListEnum(list)
    handleEventSearch()
  }

  // const setPageCheck = async (value) => {
  //   // setPageNum(value)
  //   handleEventSearch()
  // }
  const onChangePagination = async (value,pageSize) => {
    console.log(value)
    setPageNum(value)
    console.log(pageNum)
    let size = sizeListEnum.find(item => item.isCheck === true)?.value || '';
    let state = stateListEnum.find(item => item.isCheck === true)?.value;
    let yearLevel = yearLevelListEnum.find(item => item.isCheck === true)?.value;
    let params = {
      size,
      state,
      yearLevel,
      pageNum,
      pageSize: pageSize
    }
    handleEventSearch(params)
  }

  // const getParams = () => {
  //   let size = sizeListEnum.find(item => item.isCheck === true)?.value || '';
  //   let state = stateListEnum.find(item => item.isCheck === true)?.value;
  //   let yearLevel = yearLevelListEnum.find(item => item.isCheck === true)?.value;
  //   let params = {
  //     size,
  //     state,
  //     yearLevel,
  //     pageNum,
  //     pageSize: 10
  //   }
  //   return params
  // }

  const handleGetActivities = async (params) => {
    console.log(params)
    let size = sizeListEnum.find(item => item.isCheck === true)?.value || '';
    let state = stateListEnum.find(item => item.isCheck === true)?.value;
    let yearLevel = yearLevelListEnum.find(item => item.isCheck === true)?.value;
    let defeultparams = {
      size,
      state,
      yearLevel,
      pageNum,
      pageSize: 10
    }
    let res = await getActivities(params == undefined?defeultparams:params)
    console.log(res)
    let data = res?.data?.data?.list.map((item) => {
      return {
        ...item,
        eventImagePath: `${apiBaseUrl}/images/${item.eventImagePath}`,
      }
    })
    setTotalPage(res?.data?.data?.totalPage)
    setTotal(res?.data?.data?.total)
    return data ?? [];
  }

  const handleEventSearch = async (val) => {
    console.log(val)
    let data = await handleGetActivities(val)
    setActivities(data ?? []);
    console.log(data)
  }

  useEffect(() => {
    handleEventSearch()
  }, [])

  return (
    <div className='container'>
      {/* 头部 */}
      <div className="header">
        <div className='fiveroundArrBg'></div>
        <div className='sixroundArrBg'></div>
        <div className='left'>
          <div className='fz-64z'>Find the charity that suits your needs</div>
          <div className='mt-31 fz-16w'>It may be difficult for you to choose a legitimate and appropriate charity 
          to help those disaster affected victims.
          But we will provide you with a list of legally registered charities, whether you want to filter by region, 
          year of existance or size, you can find what you need on this page. Of course, 
          if you already have a vague goal in mind, you can also search the keywords to find your favorite charity.</div>
        </div>

        <img alt="" className='header_img' src={require('../../assets/images/chairtypic.jpg')} />
      </div>

      {/* 搜索区域 */}
      {/* <div className='isSearch'>
        <div className='tip'>EXPLORING OPTIONS</div>
        <div className='title fz-48T'>Search charities for keyword</div>
        <div className='isIpt'>
          <input
            onChange={handelChange}
            defaultValue={searchValue}
            className='ipt fz-24'
            type="text"
            placeholder='keyword'
          />
          <div
            className='btn'
            onClick={debounce(() => handleEventSearch(searchValue), 300)}
          ></div>
        </div>
        <div></div>
      </div> */}

      {/* list 列表加搜索 */}
      <div className='isList ml-at' >
        <ActiveList childRef={childRef} activities={activities} />
        <div className="right">
          <div className='isRightTitle mt-62 box1'>
            <div className='fz-24'>Size of charities</div>
            <div>
              {
                sizeListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setsizeListCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setsizeListCheck(item.value)}>
                            </div>
                          </div>
                      }
                    </div>

                  )
                })
              }
            </div>
          </div>

          <div className='isRightTitle box2 isHaveRoundBg'>
            <div className='fz-24'>States & Territories</div>
            <div>
              {
                stateListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setstateCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setstateCheck(item.value)}>
                            </div>
                          </div>
                      }
                    </div>

                  )
                })
              }
            </div>

            
          </div>

        

          <div className='isRightTitle box3 isHaveRoundBg'>
            <div className='fz-24'>Year of existance</div>
            <div>
              {
                yearLevelListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setyearCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setyearCheck(item.value)}>
                            </div>
                          </div>
                      }
                    </div>

                  )
                })
              }
            </div>
            
          </div>
        </div>
      </div>

      <div className="App">
  </div>
      {/* 底部切换分页 */}
      <div className='isPage isHaveRoundBg'>
      <Pagination defaultCurrent={pageNum} total={total} onChange={onChangePagination} />
        {/* <div className='eightroundArrBg'></div>
        {
          [...Array(totalPage)].map((item, index) => {

            let curPage = index + 1;
            let key = Math.random().toFixed(10) + index;
            return (
              <div
                key={key}
                className={curPage === pageNum ? 'btn isPageText isWhiteText' : 'btn'}
                onClick={() => setPageCheck(index + 1)}
              > {curPage}</div>
            )
          })
        } */}

      </div>
    </div >
  )
}
