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
    label: 'Game',
    value: 'Game',
    isCheck: false,
  },
  {
    label: 'Role-play games',
    value: 'Role-play',
    parent: 'game',
    isCheck: false,
  },
  {
    label: 'Boardgames',
    value: 'Board',
    parent: 'game',
    isCheck: false,
  },
  {
    label: 'Sports',
    value: 'Sports',
    isCheck: false,
  },
  {
    label: 'Party',
    value: 'Party',
    isCheck: false,
  },
  {
    label: 'Other',
    value: 'Other',
    isCheck: false,
  },
]

export const locationList = [
  {
    label: 'All',
    value: 'All',
    isCheck: false,
  },
  {
    label: 'West melbourne',
    value: 'West melbourne',
    isCheck: false,
  },
  {
    label: 'Melbourne',
    value: 'Melbourne',
    isCheck: false,
  },
  {
    label: 'Boxhill',
    value: 'Boxhill',
    isCheck: false,
  },
  {
    label: 'Docklands',
    value: 'Docklands',
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
    label: 'Morning',
    value: 'Morning',
    isCheck: false,
  },
  {
    label: 'Afternoon',
    value: 'Afternoon',
    isCheck: false,
  },
  {
    label: 'Evening',
    value: 'Evening',
    isCheck: false,
  },
]
