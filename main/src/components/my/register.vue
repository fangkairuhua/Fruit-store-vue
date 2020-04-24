<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
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
            <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="验证密码"
                placeholder="验证密码"
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
            password2:''
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;

                // 请求接口
                this.$axios.get("register",{params}).then((res)=>{
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            // 提示后回调
                            onOpened(){
                                // 跳转登陆路由
                                _this.$router.push("/login");
                            }
                        })

                    }else{
                        Toast("注册失败");
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