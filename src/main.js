import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "wowjs/css/libs/animate.css";
import "./../public/css/animate.css";
import axios from 'axios';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    $,
    render: h => h(App),

    data() {
        return {
            baseUrl: 'https://webblog.yolostudio.cn',
            headers: {headers: {Authorization: ''}},
        }
    }

}).$mount('#app');
