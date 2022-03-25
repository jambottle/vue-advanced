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
    GET_FEED_LIST({ commit }, feedName) {
      return fetchFeedList(feedName)
        .then(({ data }) => {
          commit('SET_FEED_LIST', data);
        })
        .catch(error => console.log(error));
    },
  },
};
