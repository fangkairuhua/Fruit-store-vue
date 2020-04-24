import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import publics from "./public";
import home from "./home";
import search from "./search";
import category from "./category";
import cart from "./cart";
import my from "./my";
import details from "./details";
import order from "./order";

const routes = [{
        path: "/",
        redirect: "/guidepage", //默认跳转广告页
    },
    ...publics, //公共路由
    home, //首页
    search, //搜索
    category, //分类
    ...cart, //购物车
    details, //详情页
    ...my, //个人中心 把对象展开写法 es6写法
    ...order //订单
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router