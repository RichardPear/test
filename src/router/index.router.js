import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import NewsDetail from '@/views/NewsDetail';
import NotFound from '@/views/NotFound';
import store from '../store/index.store';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: NewsDetail,
      meta: {
        showTabar: false,
      },
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
router.beforeEach((to, from, next) => {
  next();
  if (to.meta && to.meta.showTabar === false) {
    store.dispatch('hideTabbar');
  } else {
    store.dispatch('showTabbar');
  }
  console.log(to);
});
export default router;
