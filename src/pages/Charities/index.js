import React, { useEffect, useRef, useState } from 'react'
import debounce from "lodash/debounce";
import './index.css'
import {
  getActivities,
  categoryList,
  timeList,
  locationList,

} from '../../services/activities'
import { apiBaseUrl } from '../../services/api';
import ActiveList from '../../components/ActiveList'

export default function Activites() {

  const childRef = useRef(); //关键部分

  const [searchValue, setSearchValue] = useState('')
  const [activities, setActivities] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [timeListEnum, setTimeListEnum] = useState(timeList)
  const [locationListEnum, setlocationListEnum] = useState(locationList)
  const [categoryListEnum, setcategoryListEnum] = useState(categoryList)


  const handelChange = (e) => {
    setSearchValue(e.target.value)
  }

  const setTimeCheck = (value) => {
    let list = timeListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    setPageNum(1)
    setTimeListEnum(list)
    handleEventSearch()
  }

  const setLocationCheck = (value) => {
    let list = locationListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    setPageNum(1)
    setlocationListEnum(list)
    handleEventSearch()
  }

  const setCategoryListCheck = (value) => {
    let list = categoryListEnum.map(v => {
      v.isCheck = false;
      if (v.value === value) {
        v.isCheck = true;
      }
      return v;
    })
    setPageNum(1)
    setcategoryListEnum(list)
    handleEventSearch()
  }

  const setPageCheck = async (value) => {
    setPageNum(value)
    handleEventSearch()
  }

  const getParams = () => {
    let category = categoryListEnum.find(item => item.isCheck === true)?.value || '';
    let location = locationListEnum.find(item => item.isCheck === true)?.value;
    let time = timeListEnum.find(item => item.isCheck === true)?.value;
    let params = {
      category,
      location,
      time,
      pageNum,
      pageSize: 8
    }
    return params
  }

  const handleGetActivities = async (params) => {
    let res = await getActivities(getParams(params))
    let data = res?.data?.data?.list.map((item) => {
      return {
        ...item,
        eventImagePath: `${apiBaseUrl}/images/${item.eventImagePath}`,
      }
    })
    setTotalPage(res?.data?.data?.totalPage || 1)
    return data ?? [];
  }

  const handleEventSearch = async (val) => {
    let data = await handleGetActivities(val)
    setActivities(data ?? []);
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
          <div className='fz-64'>Find the charity that suits your needs</div>
          <div className='mt-31 fz-16'>It may be difficult for you to choose a legitimate and appropriate charity 
          to help those disaster affected victims.
           But we will provide you with a list of legally registered charities, whether you want to filter by region, 
           time of existance or size, you can find what you need on this page. Of course, 
           if you already have a vague goal in mind, you can also search the keywords to find your favorite charity.</div>
        </div>
        <img alt="" className='header_img' src={require('../../assets/images/PageCharity.jpg')} />
      </div>

      {/* 搜索区域 */}
      {/* <div className='isSearch'>
        <div className='tip'>EXPLORING OPTIONS</div>
        <div className='title fz-48T'>Search charities for keyword</div>
        <div className='isIpt'>
          <input
            onChange={handelChange}
            defaultValue={searchValue}
            className='ipt'
            type="text"
            placeholder='search'
          />
          <div
            className='btn'
            onClick={debounce(() => handleEventSearch(searchValue), 300)}
          ></div>
        </div>
        <div></div>
      </div> */}

      {/* list 列表加搜索 */}
      <div className='isList' >
        <ActiveList childRef={childRef} activities={activities} />
        <div className="right">
          <div className='isRightTitle mt-62 box1'>
            <div className='fz-24'>Time of existance</div>
            <div>
              {
                categoryListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setCategoryListCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setCategoryListCheck(item.value)}>
                            </div>
                          </div>
                      }
                    </div>

                  )
                })
              }
            </div>
          </div>

          <div className='isRightTitle box2  isHaveRoundBg'>
            <div className='fz-24'>States & Territories</div>
            <div>
              {
                locationListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setLocationCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setLocationCheck(item.value)}>
                            </div>
                          </div>
                      }
                    </div>

                  )
                })
              }
            </div>

            <div className='sevenroundArrBg'></div>
          </div>

          <div className='isRightTitle box3 isHaveRoundBg'>
            <div className='fz-24'>Size of charities</div>
            <div>
              {
                timeListEnum.map((item, index) => {
                  return (
                    <div key={item.value}>
                      {
                        item.parent ?
                          <div className='son'>
                            <div className='mt-44AndRound isMt-21'>
                              <div className='isChildrenText'>{item.label}</div>
                              <div
                                className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                                onClick={() => setTimeCheck(item.value)}>
                              </div>
                            </div>
                          </div>
                          :
                          <div className='mt-44AndRound isMt-21'>
                            <div>{item.label}</div>
                            <div
                              className={item.isCheck ? 'isCheck isRound' : 'isRound isGard'}
                              onClick={() => setTimeCheck(item.value)}>
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


      {/* 底部切换分页 */}
      <div className='isPage isHaveRoundBg'>
        <div className='eightroundArrBg'></div>
        {
          [...Array(totalPage)].map((item, index) => {

            let curPage = index + 1;
            let key = Math.random().toFixed(6) + index;
            return (
              <div
                key={key}
                className={curPage === pageNum ? 'btn isPageText isWhiteText' : 'btn'}
                onClick={() => setPageCheck(index + 1)}
              > {curPage}</div>
            )
          })
        }

      </div>
    </div >
  )
}
