export default [{
        path: "/my",
        name: "个人中心",
        component: () =>
            import ("../views/my.vue")
    },
    {
        path: "/login",
        name: "登陆",
        component: () =>
            import ("../components/my/login.vue")
    },
    {
        path: "/register",
        name: "注册",
        component: () =>
            import ("../components/my/register.vue")
    },
    {
        path: "/collection",
        name: "收藏",
        component: () =>
            import ("../components/my/collection.vue")
    },


    {
        path: "/address",
        name: "我的地址",
        component: () =>
            import ("../components/my/address.vue")
    },
    {
        path: "/addressAdd",
        name: "添加地址",
        component: () =>
            import ("../components/my/addressAdd.vue")
    },
    {
        path: "/addressEdit",
        name: "编辑地址",
        component: () =>
            import ("../components/my/addressEdit.vue")
    },
]