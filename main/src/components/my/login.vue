<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/my')"
        />
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>

import { Toast } from 'vant';
export default {
        data() {
            return {
            username: '',
            password: '',
            };
        },
        methods: {
            onSubmit(params) {
                // 请求登陆接口
                let _this = this;
                // 判断是否传参,修改返回对象路径
                let path = "/my";
                if("path" in _this.$route.query){
                    path = _this.$route.query.path;
                }

                this.$axios.get("login",{params}).then((res)=>{
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            // 提示后回调
                            onOpened(){
                                // 设置store中添加用户名
                                _this.$store.state.username = _this.username;
                                // 跳转登陆路由
                                _this.$router.push(path);
                            }
                        })

                    }else{
                        Toast("登陆失败");
                    }
                })
            },
        },
    
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    };
</script>

<style lang="scss" scoped>

</style>