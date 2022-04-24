import { baseURL } from "./api";
import lodash from "lodash";
import { axios } from '../utils/axios'

/**
 * 获取活动列表
 * @param {Object} params
 * @param {string} params.category
 * @param {string} params.location
 * @param {number} params.pageNum
 * @param {number} params.pageSize
 * @returns Promise
 */
export const getActivities = (params) => {
  return axios.get(`${baseURL}/event/search`, { params })
}

export const categoryList = [
  {
    label: 'All',
    value: 'All',
    isCheck: false,
  },
  {
    label: '0 - 5 years',
    value: '0 - 5 years',
    isCheck: false,
  },
  {
    label: '5 - 10 years',
    value: '5 - 10 years',
    isCheck: false,
  },
  {
    label: '10 - 15 years',
    value: '10 - 15 years',
    isCheck: false,
  },
  {
    label: 'More than 20 years',
    value: 'More than 20 years',
    isCheck: false,
  },
]

export const locationList = [
  {
    label: 'All',
    value: '',
    isCheck: false,
  },
  {
    label: 'Victoria',
    value: 'Victoria',
    isCheck: false,
  },
  {
    label: 'New South Wales',
    value: 'New South Wales',
    isCheck: false,
  },
  {
    label: 'Queensland',
    value: 'Queensland',
    isCheck: false,
  },
  {
    label: 'South Australia',
    value: 'South Australia',
    isCheck: false,
  },
  {
    label: 'Western Australia',
    value: 'Western Australia',
    isCheck: false,
  },
  {
    label: 'Australia Capital Territory',
    value: 'Australia Capital Territory',
    isCheck: false,
  },
  {
    label: 'Tasmania',
    value: 'Tasmania',
    isCheck: false,
  },
  {
    label: 'Northern Territory',
    value: 'Northern Territory',
    isCheck: false,
  },


]

export const timeList = [
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
