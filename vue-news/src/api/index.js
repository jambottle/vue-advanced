import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0',
};

// 2. API 함수들을 정리
function fetchFeedList(feedName) {
  return axios.get(`${config.baseURL}/${feedName}/1.json`);
}

function fetchItemInfo(itemId) {
  return axios.get(`${config.baseURL}/item/${itemId}.json`);
}

function fetchUserInfo(userId) {
  return axios.get(`${config.baseURL}/user/${userId}.json`);
}

export { fetchFeedList, fetchItemInfo, fetchUserInfo };
