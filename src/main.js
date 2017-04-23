// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods.vue';
import rating from 'components/rating/rating.vue';
import seller from 'components/seller/seller.vue';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

let routes = [{
  path: '/goods',
  component: goods
}, {
  path: '/rating',
  component: rating
}, {
  path: '/seller',
  component: seller
}];
let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

router.push('/goods');
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
});

