import 'iview/dist/styles/iview.css';

import App from './app.vue';
import Routers from './router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import axios from 'axios'
import iView from 'iview';
import store from './store/store';


Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);
// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
});