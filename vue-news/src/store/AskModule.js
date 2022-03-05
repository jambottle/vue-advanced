import { fetchAskList } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      askList: [],
    };
  },

  mutations: {
    SET_ASK_LIST(state, payload) {
      state.askList = payload;
    },
  },

  actions: {
    GET_ASK_LIST({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK_LIST', data);
        })
        .catch(error => console.log(error));
    },
  },
};
