import * as types from '../types/taskType'
import {request} from '../untils/apiRequest'
export const getData = () => {
    return async dispatch => {
      try {
        let resp;
        resp = await request("jsonplaceholder.typicode.com/posts/", "get");
        dispatch(setFetchData(resp))
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const setFetchData = fetchData => ({
    type : types.GET_DATA,
    data : fetchData
  }) 