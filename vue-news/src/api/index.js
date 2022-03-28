import axios from 'axios';
import handleException from '@/utils/handleException';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0',
};

// 2. API 함수들을 정리
async function fetchFeedList(feedName) {
  try {
    return await axios.get(`${config.baseURL}/${feedName}/1.json`);
  } catch (error) {
    handleException(error);
  }
}

async function fetchItemInfo(itemId) {
  try {
    return await axios.get(`${config.baseURL}/item/${itemId}.json`);
  } catch (error) {
    handleException(error);
  }
}

async function fetchUserInfo(userId) {
  try {
    return await axios.get(`${config.baseURL}/user/${userId}.json`);
  } catch (error) {
    handleException(error);
  }
}

export { fetchFeedList, fetchItemInfo, fetchUserInfo };
