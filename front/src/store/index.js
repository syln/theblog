import Vue from 'vue';
import * as services from '../services/login';

const state = () => ({
  isLogin: false,
  userInfo: {}
})

const getters = {
  isLogin(state) {
    return state.isLogin;
  }
}

const mutations = {
  updateState(state, payload) {
    state = Object.assign(state, payload)
  }
}

const actions = {
  async checkLogin({
    commit
  }, payload) {
    const data = await services.checkLogin({});
    commit('updateState', {
      isLogin: data.isLogin
    })
  },
  async queryUser({
    commit
  }, payload) {
    const data = await services.queryUser({});
    commit('updateState', {
      userInfo: data.userInfo
    })
  },
  async signin({
    commit
  }, payload) {
    const param = payload;
    const data = await services.signin(param);
    return data;
  },
  async signout({
    commit
  }, payload) {
    const data = await services.signout({});
    return data;
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
