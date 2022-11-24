import axios from '@/axios';
import actionTypes from '../../types/action-types';
import mutationTypes from '../../types/mutation-types';

const actions = {
  async [actionTypes.LOGIN]({ commit }, data) {
    return axios.get('/login', { params: data }).then(resp => {
      if (resp.data.status) {
        commit(mutationTypes.SET_USER_DATA, {
          ...resp.data.data.user,
          member: resp.data.data.member,
          registration: resp.data.data.registration,
          plan: resp.data.data.plan,
        });
        commit(mutationTypes.SET_STATS_DATA, {
          points: resp.data.data.points,
          checkins: resp.data.data.checkins,
        });
        commit(mutationTypes.SET_TRAININGS_CLASSES, resp.data.data.schedules_cl_groupped_days);
        commit(mutationTypes.SET_TRAININGS_PTS, resp.data.data.schedules_pt_groupped_days);
        commit(mutationTypes.SET_TRAINERS, resp.data.data.trainers);
        commit(mutationTypes.SET_PACKAGES, resp.data.data.pachete);
        commit(mutationTypes.SET_MEMBERSHIPS, resp.data.data.plans);

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.REGISTER]({ commit }, data) {
    return axios.get('/register', { params: data }).then(resp => {
      if (resp.data.status) {
        commit(mutationTypes.SET_USER_DATA, resp.data.data.user);

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.UPDATE_PASSWORD]({ commit, state }, data) {
    return axios.get('/update_user_pass', { params: data }).then(resp => {
      if (resp.data.status) {
        commit(mutationTypes.SET_USER_DATA, { ...state.userData, password: resp.data.orig_get.password });

        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  async [actionTypes.RESET_PASSWORD](context, data) {
    return axios.get('/reset', { params: data }).then(resp => {
      if (resp.data.status) {
        return { status: 'success', message: resp.data.msg };
      }

      return { status: 'error', message: resp.data.msg };
    });
  },
  [actionTypes.LOGOUT]({ commit }) {
    commit(mutationTypes.CLEAR_USER_DATA);
  },
};

export default {
  actions,
};
