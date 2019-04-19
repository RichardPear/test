import Vuex from 'vuex';
import Vue from 'vue';
import axios from './axios';
Vue.use(Vuex);
const state = {
  isShowTabbar: true,
  news: {
    data: [],
    return_count: 0,
    has_more: false,
  },
  newsDetail: {},
};
const getters = {
  news: state => state.news.data,
  returnCount: state => state.news.return_count,
  maxBehotTime: state => {
    let news = state.news.data;
    if (news && news.length) {
      return news[news.length - 1].behot_time;
    }
    return 0;
  },
  hasMore: staet => state.news.has_more
};
const actions = {
  async getNews({ commit }) {
    let { data } = await axios.get('/api/mtoutiao/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A155DC9BC428419&max_behot_time=0&i=');
    commit('setNews', data);
  },
  async getNewsDetail({ commit }, source) {
    let { data } = await axios.get(`/api/mtoutiao/${source}/info/?_signature=9w8v6hAQq8ZdIG9qor7v9.cPL.&i=${source.slice(1)}`);
    commit('setNewsDetail', data.data);
  },
  hideTabbar({ commit }) {
    commit('setShowTabbar', false);
  },
  showTabbar({ commit }) {
    commit('setShowTabbar', true);
  },
  async getMoreNews({ commit }, { maxBehotTime = 0 }) {
    let { data } = await axios.get(`/api/mtoutiao/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A155DC9BC428419&max_behot_time=${maxBehotTime}&i=${maxBehotTime}`);
    commit('appendNews', data.data);
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
  appendNews(state, news) {
    state.news.data.push(...news);
  }
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
