<template>
    <div>
        <!-- 订单遍历 -->
        <div v-for="(item,index) in lists" :key="index" >
            <van-panel 
            :title="'订单：'+item.orderId" 
            :status="typeList[item.type]"
            v-if="item.type == 1"
            >
                <!-- 商品遍历 -->
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    desc="描述信息"
                    :title="value.name"
                    thumb="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/2_thumb_G_1502250237688.jpg"
                    />
                </div>
                <!-- 待支付 -->
                <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
                    <van-button size="small" type="danger" @click="del(index)" >删除订单</van-button>
                    <van-button size="small" type="primary"  @click="onPay(item.orderId)" >支付订单</van-button>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lists:[],
                typeList:[]
            }
        },
        methods:{  
            onPay(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; //切换支付后待收货。调用支付接口
            },
            del(index){
                // 修改数据状态，改为：6
                this.lists[index].type = 6;
            }
        },
        created(){
            this.typeList = this.$store.state.orderlist.typeList;
            let dataList = this.$store.state.orderlist.lists;
            this.lists = dataList.filter(item=>item.type == 1);
        },
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                this.$store.commit("orderlist/editId",this.lists);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .van-panel-footer{
        text-align: right;
    }

</style>