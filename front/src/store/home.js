import Vue from 'vue';
import router from 'vue-router';
import * as services from '../services/home';
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
  async addPost({
    commit
  }, payload) {
    const param = {
      content: payload.content
    };
    const data = await services.addPost(param);
    return data;
  },
  async deletePost({
    commit
  }, payload) {
    const param = {
      postId: payload.postId
    };

    const data = await services.deletePost(param);
    return data;
  },
  async queryPost({
    commit
  }, payload) {
    const data = await services.queryPost({});
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
