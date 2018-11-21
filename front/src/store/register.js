import Vue from 'vue';
import router from 'vue-router';
import * as services from '../services/register';
import {
  message
} from 'ant-design-vue';
const state = () => ({

})

const getters = {

}

const mutations = {
  updateState(state, payload) {
    state = Object.assign(state, payload)
  }
}

const actions = {
  async submit({
    commit
  }, payload) {
    const param = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      confirmPassword: payload.confirmPassword
    };
    const router = payload.$router;
    const data = await services.register(param);
    if (data.success) {
      return data;
    } else {
      message.error(data.msg)
    }
  },
  updateState({
    commit
  }, payload) {
    commit('updateState', payload)
  }
}

const strict = false;
export {
  state,
  mutations,
  actions,
  getters,
  strict
}
