import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css";
// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

// swiper插件
import "swiper/css/swiper.min.css";

// 手动安装rem 
import Flexible from "amfe-flexible";
Vue.use(Flexible);
// 分类联动功能
// $cnpm install @better-scroll/core@next --save
// https://better-scroll.github.io/docs/zh-CN/guide/how-to-install.html#npm
// 动画第三方样式
// cnpm install animate.css --save
import "animate.css";

// axios配置
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:3000/';
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')