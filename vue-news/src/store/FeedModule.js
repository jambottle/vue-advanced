import { fetchFeedList } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      feedList: [],
    };
  },

  mutations: {
    SET_FEED_LIST(state, payload) {
      state.feedList = payload;
    },
  },

  actions: {
    async GET_FEED_LIST({ commit }, feedName) {
      const response = await fetchFeedList(feedName);
      commit('SET_FEED_LIST', response.data);
    },
  },
};
