import axios from '@/axios';
import actionTypes from '../../types/action-types';

const actions = {
  [actionTypes.CHECK_PLAN](context, data) {
    return axios.get('/check_plan', { params: data }).then(resp => {
      if (resp.data.status) {
        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  [actionTypes.FREEZE_PLAN](context, data) {
    return axios.get('/freeze', { params: data }).then(resp => {
      if (resp.data.status) {
        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
};

export default {
  actions,
};
