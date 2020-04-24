// 首页导航
export default {
    path: "/home",
    name: "首页", //别名
    component: () =>
        import ("../views/home.vue"),
    children: [{
            path: "recommend",
            name: "",
            component: () =>
                import ("../components/home/recommend.vue")
        },

    ]
}