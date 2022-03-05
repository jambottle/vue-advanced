import { fetchJobsList } from '@/api';

export default {
  namespaced: true,

  state() {
    return {
      jobsList: [],
    };
  },

  mutations: {
    SET_JOBS_LIST(state, payload) {
      state.jobsList = payload;
    },
  },

  actions: {
    GET_JOBS_LIST({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS_LIST', data);
        })
        .catch(error => console.log(error));
    },
  },
};
