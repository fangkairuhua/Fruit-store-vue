<template>
  <div id="appview">
<!-- 顶部导航 -->
    <van-sticky>     
      <van-row class="navtop">
        <van-col span="3">
          <van-icon @click="$router.push('/category')"  name="bars" size="25px" />
        </van-col>
        <van-col span="18">
          <span class="name">大圣水果庄园商城</span>
        </van-col>
        <van-col span="3">
          <van-icon @click="$router.push('/cart')"  name="shopping-cart-o" size="25px" />
        </van-col>
      </van-row>
    </van-sticky>
<!-- 顶部导航 end -->

    <!-- 过渡效果与路由器结合 -->
    <transition mode="out-in" name="routerview">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    getSearch() {
      // 跳转路由
      this.$router.push("/search");
    }
  },
  
  mounted() {
    new Swiper(".swiperWra");
    
  }
};
</script>

<style lang="scss" scoped>
// 解决滚动条效果
#appview {
  overflow: hidden;
  background: #ebeced;

  .navtop {
    // height: 2.8125rem;
    //   line-height: 2.8125rem;
    background: #64a131;
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 16px;
    .name {
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
    .van-icon {
      height: 45px;
      line-height: 45px;
      text-align: center;
    }
  }
}

// 路由过度效果
.routerview-enter,
.routerview-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.routerview-enter-active,
.routerview-leave-active {
  transition: all 2s ease;
}

// swiper公共样式
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>