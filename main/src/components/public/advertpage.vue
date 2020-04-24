<template>
  <div>
    <router-link to="/home/recommend" tag="a">
      <img
        src="http://haibao.tssgsc.com/Uploads/syspic/scene/4ca09b871e1a526bf6ffdd0bd018d61f.gif"
        alt
      />
    </router-link>

    <button class="button" @click="goHome">开始吧</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 100,
      cleardata: null //清除定时器
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home/recommend"); //推荐页面
    }
  },
  created() {
    // 倒计时定时器
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home/recommend"); //推荐页面
      } else {
        this.num--;
      }
    }, 1000);
    this.$store.state.vanTabbar = false;
  },
  // 销毁生命周期函数之前停止
  beforeDestroy() {
    //销毁vue数据与方法。组件结束执行
    // 定时器属于浏览器对象，属于window。
    clearInterval(this.cleardata);
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
// div {
//   // img{
//   //     margin-top: 150px;
//   // }
//   position: fixed;
//   background: #b5fff5;
//   height: 100%;
//   width: 100%;
//   img {
//     width: 100%;
//     height: auto;
//     overflow: hidden;

//   }
//   .button{
//     //   position: relative;
//     width:100px;
//     height:50px;
//     line-height: 50px;
//     border-radius: 20px;
//     background: coral;
//     text-align: center;
//      margin:60px 0 0 189px;
//      border:none;

//   }
// }
</style>