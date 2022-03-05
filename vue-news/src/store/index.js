import { createStore } from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api';

const store = createStore({
  state() {
    return {
      newsList: [],
      askList: [],
      jobsList: [],
    };
  },

  mutations: {
    SET_NEWS_LIST(state, payload) {
      state.newsList = payload;
    },
    SET_ASK_LIST(state, payload) {
      state.askList = payload;
    },
    SET_JOBS_LIST(state, payload) {
      state.jobsList = payload;
    },
  },

  actions: {
    GET_NEWS_LIST({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          commit('SET_NEWS_LIST', data);
        })
        .catch(error => console.log(error));
    },
    GET_ASK_LIST({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK_LIST', data);
        })
        .catch(error => console.log(error));
    },
    GET_JOBS_LIST({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS_LIST', data);
        })
        .catch(error => console.log(error));
    },
  },
});

export default store;
