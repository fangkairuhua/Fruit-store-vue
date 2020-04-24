<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="orderpay"
        />
        <!-- 地址 -->
        <van-contact-card
        type="edit"
        :name="name"
        :tel="tel"
        @click="add"
        />

        <!-- 商品列表 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            desc="描述信息"
            :title="item.name"
            thumb="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/2_thumb_G_1502250237688.jpg"
            />
        </div>

        <!-- 提交订单 -->
        <van-submit-bar
        :price="sum*100"
        button-text="支付"
        @submit="onsubmit"
        />


    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                name:"",
                tel:"",
                totals:0
            }
        },
        methods:{
            add(){
                this.$router.push("/address");
            },
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    address:this.address,
                    goodsList:this.lists,
                    type:2 //已支付
                }
                this.$store.commit("orderlist/add",order);
                // 清除购物车数据
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;

                this.$router.push("/orderList/orderAll");
            },
            // 未支付处理
            orderpay(){
                // console.log("处理订单未支付");
                // 未支付订单处理
                let order = {
                    orderId:new Date().getTime(), //1584064700947验证
                    address:this.address,
                    goodsList:this.lists,
                    type:1 //未支付
                }
                this.$store.commit("orderlist/add",order);

                // 清除购物车数据
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;

                // 跳转路由
                this.$router.go("-1");
            }
            
        },
        computed:{
            // 总价格计算
            sum(){
                // 总价格计算
                // reduce()返回计算总价格
                // total 总价格累加
                // item 数据中对象
                return this.lists.reduce((total,item)=>{
                    // 判断选项
                    if(!item.isSelect) return total; //false不让计算总价格
                    return total + parseInt(item.price) * parseInt(item.num);//总价格
                },0);//总价格默认参数值为0
            }
        },
        
        created(){
            // 默认获取地址信息
            let defaultId = this.$store.state.address.defaultId;
            let data = this.$store.state.address.lists;
            this.address = data.find(item=>item.id == defaultId); //默认id匹配数组中id值
            this.name = this.address.name;
            this.tel = this.address.tel;

            // 获取购物车数据
            this.lists = this.$store.state.cart.lists;


            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>

</style>