import { fetchNewsList } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      newsList: [],
    };
  },

  mutations: {
    SET_NEWS_LIST(state, payload) {
      state.newsList = payload;
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
  },
};
