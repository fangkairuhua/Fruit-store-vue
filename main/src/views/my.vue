<template>
  <div>
    <!-- 个人中心 -->
    <van-nav-bar :title="$route.name" />
    <div class="top">
      <van-row>
        <van-col span="24">
          <van-image round width="80px" height="80px" src="https://img.yzcdn.cn/vant/tree.jpg" />
        </van-col>
        <van-col span="24">
          <div v-if="$store.state.username">
            <h3 v-text="$store.state.username"></h3>
            <span @click="$store.state.username=''">退出</span>
          </div>
          <div v-else>
            <router-link to="/login">登陆</router-link>
            <router-link to="/register">注册</router-link>
          </div>
        </van-col>
      </van-row>
    </div>

    <div>
      <van-row>
        <van-col span="12" class="xiaoX">消息</van-col>
        <van-col span="12" class="xiaoX">关联账号</van-col>
      </van-row>
    </div>

    <van-cell-group>
      <van-cell title="我的订单" to="/orderList/orderAll" is-link />
      <div class="my_order_c">
        <ul>
          <li>
            <router-link to="/orderList/orderPay" tag="a" >
              <img src="http://www.tssgsc.com/images/wap/userCenter3/order_img1.png" alt />
              <p>未处理</p>
            </router-link>
          </li>
          <li>
           <router-link to="/orderList/orderGoods" tag="a" >
              <img src="http://www.tssgsc.com/images/wap/userCenter3/order_img2.png" alt />
              <p>处理中</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderList/orderEnd" tag="a" >
              <img src="http://www.tssgsc.com/images/wap/userCenter3/order_img3.png" alt />
              <p>完成</p>
             </router-link>
          </li>
        </ul>
      </div>
      
      <van-cell title="我的地址" to="/address" is-link />
      <van-cell title="优惠卷" is-link />
      <van-cell title="设置" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     fileList: []
  //   };
  // }
};
</script>

<style lang="scss" scoped>

.top {
  background: url("../assets/img/q1.jpg");
  background-size: 100% 100%;
  padding: 0.266667rem;
  text-align: center;
  .van-image {
    margin: 0 auto;
  }
  .van-col {
    height: 70px;
    line-height: 70px;
    color: #fff;
    text-align: center;

    a {
      font-size: 18px;
      width: 50px;
      background: #37b9df;
      // border:1px solid #ccc;
      padding: 3px 25px 3px 25px;
      margin: 10px;
      color: #fff;
      border-radius: 20px;
    }
  }
  h3 {
    height: 20px;
    text-align: center;
  }
  span {
    font-size: 12px;
  }
}
.xiaoX {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: #fff;
  border-right: 1px solid #ccc;
  font-size: 0.4rem;
}
s .van-cell {
  margin-top: 10px;
}
.my_order_c {
  height: 1.875rem;
  border-top: 1px solid #ccc;
  ul {
    li {
      width: 33%;
      height: auto;
      float: left;
      img {
        width: 30px;
        margin: 15px auto;
      }
      p {
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>