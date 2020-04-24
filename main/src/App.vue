<template>
  <div id="app">
    <van-tabbar v-model="active" v-show="$store.state.vanTabbar" :route="routeboo" z-index="300">
      <van-tabbar-item to="/home/recommend" icon="shop-collect-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>

    <!-- 路由模块 -->
    <!-- 过渡效果与路由器结合 -->
    <transition
      mode="out-in"
      :duration="{ enter: 400, leave: 400 }"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
    <!-- 控制底部显示 -->
    <div class="bottomnull"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      active: 0,
      routeboo: true
    };
  }
};
</script>

<style lang="scss">
.bottomnull {
  height:auto;
  width: 100%;
}

// 解决滚动条效果
#app {
  overflow: hidden;
  
}

// 路由过度效果
// .v-enter,
// .v-leave-to{
// 	opacity: 0;
// 	transform: translateX(200px);
// }
// .v-enter-active,
// .v-leave-active{
// 	transition: all 2s ease;
// }
</style>