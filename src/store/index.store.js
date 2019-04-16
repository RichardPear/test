import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
Vue.use(Vuex);
const state = {
  isShowTabbar: true,
  news: [],
  newsDetail: {},
};
const getters = {};
const actions = {
  async getNews({ commit }) {
    // let { data } = await axios.get('/api/toutiao/index?type=&key=3de30b5262b766f921cb51db84f2f878');
    let { data } = await axios.get('/api/mtoutiao/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A155DC9BC428419');
    commit('setNews', data.data);
  },
  async getNewsDetail({ commit }, source) {
    let { data } = await axios.get(`/api/mtoutiao/${source}/info/?_signature=9w8v6hAQq8ZdIG9qor7v9.cPL.&i=${source.slice(1)}`);
    console.log(data.data);
    commit('setNewsDetail', data.data);
  },
  hideTabbar({ commit }) {
    commit('setShowTabbar', false);
  },
  showTabbar({ commit }) {
    commit('setShowTabbar', true);
  },
};
const mutations = {
  setNews(state, news) {
    state.news = news;
  },
  setNewsDetail(state, detail) {
    state.newsDetail = detail;
  },
  setShowTabbar(state, flag) {
    state.isShowTabbar = flag;
  },
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
