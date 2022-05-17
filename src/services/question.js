import { apiBaseUrl } from "./api";
// import lodash from "lodash";
import { axios } from '../utils/axios'

// 提交问题接口
export const submitQuestion = (data) => {
  return axios.post(`${apiBaseUrl}/event/score`, data)
}


