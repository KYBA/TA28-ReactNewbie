import { baseURL,apiBaseUrl } from "./api";
// import lodash from "lodash";
import { axios } from '../utils/axios'

/**
 * 获取活动列表
 * @param {Object} params
 * @param {string} params.yearLevel
 * @param {string} params.state
 * @param {string} params.size
 * @param {string} params.keyword
 * @param {number} params.pageNum
 * @param {number} params.pageSize
 * @returns Promise
 */
export const getActivities = (params) => {
  return axios.get(`${apiBaseUrl}/charity/search`, { params })
}

export const yearLevelList = [
  {
    label: 'All',
    value: '',
    isCheck: false,
  },
  {
    label: '0 - 5 years',
    value: '0-5',
    isCheck: false,
  },
  {
    label: '5 - 10 years',
    value: '5-10',
    isCheck: false,
  },
  {
    label: '10 - 20 years',
    value: '10-20',
    isCheck: false,
  },
  {
    label: 'More than 20 years',
    value: '20+',
    isCheck: false,
  },
]

export const stateList = [
  {
    label: 'All',
    value: '',
    isCheck: false,
  },
  {
    label: 'Victoria',
    value: 'VIC',
    isCheck: false,
  },
  {
    label: 'New South Wales',
    value: 'NSW',
    isCheck: false,
  },
  {
    label: 'Queensland',
    value: 'QLD',
    isCheck: false,
  },
  {
    label: 'South Australia',
    value: 'SA',
    isCheck: false,
  },
  {
    label: 'Western Australia',
    value: 'WA',
    isCheck: false,
  },
  {
    label: 'Australia Capital Territory',
    value: 'ACT',
    isCheck: false,
  },
  {
    label: 'Tasmania',
    value: 'TAS',
    isCheck: false,
  },
  {
    label: 'Northern Territory',
    value: 'NT',
    isCheck: false,
  },


]

export const sizeList = [
  {
    label: 'All',
    value: 'All',
    isCheck: false,
  },
  {
    label: 'Large',
    value: 'Large',
    isCheck: false,
  },
  {
    label: 'Medium',
    value: 'Medium',
    isCheck: false,
  },
  {
    label: 'Small',
    value: 'Small',
    isCheck: false,
  },
]
