// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchPlaylists = (cat) =>
  http.get('/top/playlist', { params: { cat } });

//获取默认搜索关键词
/**
 * @description  获取默认搜索关键词
 * @param  {Array} xxx
 * @returns {Promise} xxx
 */
export const fetchSearchDefault = () => http.get('/search/default');
// export const fetchSearchResult = (params) =>
//   http.get('/cloudsearch', { params });

export const fetchSearchResult = (params) =>
  http.get('/search', { params });
