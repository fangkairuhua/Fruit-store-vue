<template>
  <div class="mains">

    <div class="swiper-container containerguidepage">
      <div class="swiper-wrapper">

        <div class="swiper-slide" >
          <img src="../../assets/img/timg.jpg" alt />
          <van-button
                
                plain
                hairline
                type="primary"
                size="small"
                to="/home/recommend"
              >GO</van-button>
        </div>
      </div>
     
    </div>
   
     <router-view></router-view>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flag: true,
       active: 0
    };
  },
  created() {
    this.$store.state.vanTabbar = false;
  },
  mounted() {
    let _this = this;
    new Swiper(".containerguidepage", {
      pagination: {
        el: ".paginationguidepage"
      },
      on: {
        touchStart: function() {
          
        },
        // 轮播图切换前效果
        slideChangeTransitionStart: function() {
          _this.flag = false; //隐藏
        },
        // 轮播图切换后效果
        slideChangeTransitionEnd: function() {
          // _this.flag[this.activeIndex] = true; //显示
          _this.flag = true;
        }
      }
    });
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
#audio_btn {
  position: absolute;
  left: 10%;
  bottom:11%;
  z-index: 200;
  display: none;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
}

.mains {
  width: 100%;
  height: auto;
  .containerguidepage {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    
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
    .van-button{
         position: absolute;
    width:40px;
    height: 40px;
    
   border:1px solid #752c2c;
    bottom:40px;
    right:13px;
    color: #752c2c;
    }
    img {
      width: 100%;
      height: auto;
      background-size: 100% 100%;;
     
    }
  }
}
</style>