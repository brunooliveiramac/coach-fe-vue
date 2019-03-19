import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { store } from './store/store';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './axios/config';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
