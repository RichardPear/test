import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import NewsDetail from '@/views/NewsDetail';
import NotFound from '@/views/NotFound';
import store from '../store/index.store';

Vue.use(Router);
const router = new Router({
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
  routes: [
    {
      path: '/',
      name: '/',
      component: Home,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: NewsDetail,
      meta: {
        showTabar: false,
        keepAlive: false,
      },
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        keepAlive: false,
      },
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
