import request from '../utils/request';
import api from'./api'
export function getlist(payload) {
  return request(api.articles,payload);
}
export function comment(payload) {
  return request(api.comment,payload);
}
