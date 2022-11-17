import axios from '@/axios';
import mutationTypes from '../../types/mutation-types';
import actionTypes from '../../types/action-types';

const actions = {
  async [actionTypes.MAKE_RESERVATION]({ commit }, data) {
    return axios.get('/reservation', { params: data }).then(resp => {
      if (resp.data.status) {
        commit(mutationTypes.ADD_RESERVATION, resp.data.orig_get);

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.CANCEL_RESERVATION]({ commit }, data) {
    return axios.get('/cancel_reservation', { params: data }).then(resp => {
      if (resp.data.status) {
        commit(mutationTypes.ADD_RESERVATION, resp.data.orig_get.id);

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
};

export default {
  actions,
};
