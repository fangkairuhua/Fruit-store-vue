<template>
  <div>
    <!-- 详情页 -->

    <!-- 返回按钮 -->
    <van-button class="arrowtop" @click="$router.go(-1)" icon="arrow-left" round type="default" />

    <!-- v-bind数据组件传参 -->
    <!-- 组件与数据分离，让组件复用 -->
    <!-- 轮播图 -->
    <div class="swiper-container swiperWra">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="http://demo.guoyuan.ld-web.com/images/201708/goods_img/2_P_1502250237621.jpg"
            width="100%"
            height="auto"
            border="0"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="http://demo.guoyuan.ld-web.com/images/201708/goods_img/2_P_1502250237621.jpg"
            width="100%"
            height="auto"
            border="0"
          />
        </div>
      </div>
    </div>
    <!-- 轮播图 -->

    <!-- 价格 -->
    <div class="price">￥{{goods.price}}</div>
    <!-- 价格 -->

    <!-- 介绍 -->
    <div class="panel">
      <span>{{goods.name}}</span>
      <div class="content">
       
        <br />用于脾胃虚弱，少食腹泻，或脾胃阴伤，口舌干燥；肝肾不足，腰膝酸软，四肢乏力，或遗精；血虚，头晕心悸，面色不华，面部雀斑等顽固性斑类可起淡化作用。
      </div>
    </div>
    <!-- 介绍 -->

    <van-tabs v-model="active" style="padding-top:10px">
      <van-tab title="猜你喜欢">
        <section class="item_show_box1 box1 region">
          <!-- <h6 class="borderBottom">礼品</h6> -->
          <div class="borderBottom">
            <span>|</span>礼品盒
          </div>
          <div class="flex flex-f-row">
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/35_thumb_G_1502252566810.jpg"
                  alt="橙先生-澳洲巧克力橙"
                />
              </router-link>
              <div style="text-align:center">
                <span class="price_s">
                  ￥
                  <span>99.0</span>
                </span>
                <!-- <br />
                <span>橙先生-澳洲巧克力橙</span>-->
                <p class="priceBottom">橙先生-澳洲巧克力橙</p>
              </div>
            </div>
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/34_thumb_G_1502252513339.jpg"
                  alt="山青梨"
                />
              </router-link>
              <div style="text-align:center">
                <span class="price_s">
                  ￥
                  <span>32.8</span>
                </span>
                <!-- <br />
                <span>山青梨</span>-->
                <p class="priceBottom">山青梨</p>
              </div>
            </div>
          </div>
          <div class="flex flex-f-row">
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/33_thumb_G_1502252462892.jpg"
                  alt="加拿大蕾妮樱桃"
                />
              </router-link>
              <div style="text-align:center">
                <span class="price_s">
                  ￥
                  <span>108.0</span>
                </span>
                <!-- <br />
                <h6>加拿大蕾妮樱桃</h6>-->
                <p class="priceBottom">加拿大蕾妮樱桃</p>
              </div>
            </div>
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/32_thumb_G_1502252416018.jpg"
                  alt="大个深山黄桃"
                />
              </router-link>
              <div style="text-align:center">
                <span class="price_s">
                  ￥
                  <span>31.8</span>
                </span>
                <!-- <br />
                <h6>大个深山黄桃</h6>-->
                <p class="priceBottom">大个深山黄桃</p>
              </div>
            </div>
          </div>
          <div class="flex flex-f-row">
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/31_thumb_G_1502252360473.jpg"
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
            </div>
            <div class="goodsItem flex_in">
              <router-link to="/details" tag="a">
                <img
                  src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/30_thumb_G_1502252309006.jpg"
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
            </div>
          </div>
        </section>
      </van-tab>
      <van-tab title="商品介绍">
        <div data-v-383fd33b class="contentDeatils">
          <p>
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280547510161.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280547741423.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280548494449.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280549370676.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280550613023.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280551604936.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280552518445.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="http://aimg8.dlszyht.net.cn/ueditor/image/763/1524247/1503280552604699.jpg"
              class="img-ks-lazyload"
              alt
              style="margin: 12px 12px 0px 0px; padding: 0px; border: 0px; color: rgb(107, 107, 107); font-family: Arial, Helvetica, sans-serif; line-height: 24px; white-space: normal; widows: 1; background-color: rgb(255, 255, 255);"
              align="absmiddle"
            />
            <img
              src="https://img.alicdn.com/imgextra/i2/2471189597/TB2PKt4q0FopuFjSZFHXXbSlXXa_%21%212471189597.jpg"
            />
          </p>
        </div>
      </van-tab>
      <van-tab title="规格">
        <section class="good_canshu">
          <h2>商品详细参数</h2>
          <ul>
            <li>
              <p class="p_left">商品名称：</p>
              <p class="p_right">加拿大蕾妮樱桃</p>
            </li>
            <li>
              <p class="p_left">商品编号：</p>
              <p class="p_right">ecs000002</p>
            </li>
            <li>
              <p class="p_left">上架时间：</p>
              <p class="p_right">2017-08-09</p>
            </li>
            <li>
              <p class="p_left">商品重量：</p>
              <p class="p_right">0克</p>
            </li>
            <li>
              <p class="p_left">品类：</p>
              <p class="p_right">樱桃</p>
            </li>
            <li>
              <p class="p_left">产地：</p>
              <p class="p_right">加拿大</p>
            </li>
            <li>
              <p class="p_left">规格：</p>
              <p class="p_right">单品</p>
            </li>
          </ul>
        </section>
      </van-tab>
    </van-tabs>

    <!-- 商品导航 -->
    <van-goods-action>
      <van-goods-action-icon
        @click="$router.push('/home/recommend')"
        icon="shop-collect-o"
        color="#07c160"
        text="首页"
      />
      <van-goods-action-icon
        @click="$router.push('/cart')"
        icon="shopping-cart-o"
        :info="num"
        text="购物车"
      />
     
      <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
      <van-goods-action-button @click="$router.push('/cart')" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapMutations } = createNamespacedHelpers("cart");

// 引入轮播图组件
import Swiper from "swiper";
export default {
  data: function() {
    return {
      active: 2,
      // num:1,
      goods: {
        id: 6,
        name: "加拿大蕾妮樱桃 ",
        price: "108",
        num: 1
      }
    };
  },
  methods: {
    getCart(){
        // 把数据添加入vuex购物车
        this.$store.commit("cart/add",this.goods);
    },
    // add 直接调用vuex购物车里面add方法
    ...mapMutations(["add"])
  },
  mounted() {
    new Swiper(".swiperWra");
  },
  computed: {
    ...mapState({
      num: state => state.num
    })
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

  .good_canshu {
  width: 100%;
  overflow-y: scroll;
  margin: 10px auto;
  background: #ffffff;
  height: 100%;
   h2 {
    width: 100%;
    text-align: center;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    color: #333;
    font-weight: normal;
    padding-top: 30px;
     
  }
  ul {
      width: 100%;
      overflow: hidden;
      padding-top: 10px;
      
       li {
        font-size: 14px;
        width: 100%;
        height: 40px;
        overflow: hidden;
        border-bottom: 1px solid #eeeeee;
        padding-top: 5px;
        padding-bottom: 5px;
        .p_left {
          float: left;
          display: block;
          height: 40px;
          line-height: 40px;
          color: #999;
          width: 25%;
        }
        .p_right {
          float:right;
          display: block;
          width: 70%;
          height: 40px;
          line-height: 40px;
          color: #666;
        }
      }
    }
}





.price {
  color: #ff6b00;
  font-size: 28px;
  background: #fff;
}
.panel {
  padding:0 0 0 12px;
  background: #fff;
  span{
    font-size: 18px;
    font-family:"微软雅黑";
  }
  .content {
    font-size: 14px;
  }
}
.arrowtop {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 200;
  width: 42px;
  i {
    display: block;
    width: 42px;
    height: 42px;
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 24px;
  }
}

.box1 {
  margin-top: 10px;
  border: 1px solid #e2e2e2;
  background: #ffffff;
  .borderBottom {
    font-size: 20px;
    background: #fff;

    margin: 0 0px 0 4px;
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