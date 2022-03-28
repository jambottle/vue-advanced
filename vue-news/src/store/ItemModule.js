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
    async GET_ITEM_INFO({ commit }, itemId) {
      const response = await fetchItemInfo(itemId);
      commit('SET_ITEM_INFO', response.data);
    },
  },
};
