import axios from '@/axios';
import actionTypes from '../../types/action-types';
import getterTypes from '@/store/types/getter-types';

const actions = {
  async [actionTypes.TOGGLE_RESERVATION]({ rootGetters, dispatch }, data) {
    return axios.get(`/${data.action}`, { params: data }).then(resp => {
      if (resp.data.status) {
        const { username, password } = rootGetters[getterTypes.USER_DATA];
        dispatch(actionTypes.LOGIN, {
          username,
          password,
        });

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.TOGGLE_NOTIFICATIONS]({ rootGetters, dispatch }, data) {
    return axios.get('/reminder', { params: data }).then(resp => {
      if (resp.data.status) {
        const { username, password } = rootGetters[getterTypes.USER_DATA];
        dispatch(actionTypes.LOGIN, {
          username,
          password,
        });

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.CHECK_IN]({ rootGetters, dispatch }, data) {
    return axios.get('/checkin', { params: data }).then(resp => {
      if (resp.data.status) {
        const { username, password } = rootGetters[getterTypes.USER_DATA];
        dispatch(actionTypes.LOGIN, {
          username,
          password,
        });

        return { status: 'success', message: resp.data.msg, dt: resp.data.dt };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
};

export default {
  actions,
};
