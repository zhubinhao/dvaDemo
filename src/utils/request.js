import fetch from 'dva/fetch';
import {server} from '../services/config'
import qs from'qs'
import store from 'store'
const path = server[process.env.API_ENV]
const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json;charset=utf-8',
};
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function gen(params){
  const paramsArray = params.split(' ')
  let method = 'GET'
  let url =paramsArray[0]
  if(paramsArray.length>1){
    url =paramsArray[1];
    method=paramsArray[0]
  }
  return {
    method,
    url: path + url,
  };
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(params, options={}) {
  let { url, method } = gen(params);
  const token = store.get('token')
  let newOptions = {
    ...options,
    headers: commonHeaders,
  };
  if(method.toUpperCase()==='GET'){
    url +=`?${qs.stringify(options)}`
  }else{
    newOptions = {
      ...newOptions,
      method,
      body: JSON.stringify(newOptions),
    };
  }
  if (token) {
    newOptions.headers['Authorization'] = token;
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
