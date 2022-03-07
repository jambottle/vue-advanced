import { fetchItemInfo } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      itemInfo: {},
    };
  },

  mutations: {
    SET_ITEM_INFO(state, payload) {
      state.itemInfo = payload;
    },
  },

  actions: {
    GET_ITEM_INFO({ commit }, itemId) {
      fetchItemInfo(itemId)
        .then(({ data }) => {
          commit('SET_ITEM_INFO', data);
        })
        .catch(error => console.log(error));
    },
  },
};
