<!-- 搜索 -->
<template>
  <div>
    <van-row>
      <van-col span="3">
        <van-icon @click="$router.go(-1)" name="arrow-left" background="#ebeced" />
      </van-col>
      <van-col span="21">
        <van-search placeholder="搜本站商品" shape="round" background="#ebeced" />
      </van-col>
    </van-row>
    

    <section class="item_show_box1 box1 region">
      <!-- <h6 class="borderBottom">热卖商品</h6> -->
      <div class="borderBottom">
        <span>|</span>热门
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/9_thumb_G_1502250681318.jpg"
              alt="加拿大蓝莓"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>99.0</span>
            </span>
            <!-- <br />
            <h6>橙先生-澳洲巧克力橙</h6>-->
            <p class="priceBottom">加拿大蓝莓</p>
          </div>
          <div class="dataTiem">
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/7_thumb_G_1502250569732.jpg"
              alt="橙先生-澳大利亚脐橙"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>32.8</span>
            </span>
            <!-- <br />
            <h6>山青梨</h6>-->
            <p class="priceBottom">橙先生-澳大利亚脐橙</p>
          </div>
          <div class="dataTiem">
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/2_thumb_G_1502250237688.jpg"
              alt="加拿大蕾妮樱桃"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>108.0</span>
            </span>
            <!-- <br />
            <span>加拿大蕾妮樱桃</span>-->
            <p class="priceBottom">加拿大蕾妮樱桃</p>
          </div>
          <div class="dataTiem">
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/1_thumb_G_1502164611417.jpg"
              alt="大个深山黄桃"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>31.8</span>
            </span>
            <!-- <br />
            <span>大个深山黄桃</span>-->
            <p class="priceBottom">大个深山黄桃</p>
          </div>
          <div class="dataTiem">
            <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
          </div>
        </div>
      </div>
    </section>
    <!-- $router.go(-1) //-1表示返回上一级 -->
    <!-- $router.go(1) //1表示刷新当前页面，刷新页面，使用路由go刷新-->
    <!-- $router.go(2) //2表示返回下一级 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },

  created() {
    this.$store.state.vanTabbar = false;
  },
  // 生命周期钩子，最后销毁函数
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
.van-col {
  height: 54px;
  line-height: 54px;
  background: #ebeced;
  text-align: center;
  .van-icon {
    height: 54px;
    line-height: 54px;

    margin: auto;
    text-align: center;
  }
}

.box1 {
  margin-top:50px;
  border: 1px solid #e2e2e2;
  background: #ffffff;
  .borderBottom {
    font-size: 20px;
    background: #fff;

    margin: 0 0px 0 -2px;
    color: #f6ab00;
    border-bottom: 1px solid #ccc;
  }

  .flex-f-row {
    // width:100%;
    // height:auto;
    display: flex;

    .goodsItem {
      width: 100%;
      padding: 0.125rem;
      a {
        color: #000000;
        text-decoration: none;
        img {
          width: 100%;
          height: auto;
        }
      }
      .price_s {
        color: #f6ab00;
        font-size: 20px;
        display: inline-block;
      }
      .priceBottom {
        color: #333;
        font-size: 15px;
      }
      .dataTiem {
        height: 20px;
        background: #64a131;
        text-align: center;

        .van-count-down {
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
}
</style>