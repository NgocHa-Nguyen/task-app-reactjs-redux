import axios from "axios";

export const request = (url, method) => {
    return axios({
      method,
      url: `http://${url}`
      //data: payload
    });
  };