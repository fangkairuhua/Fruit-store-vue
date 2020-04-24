<template>
  <div>
    <van-nav-bar :title="$route.name" />
    <div class="ico_13 cart-logo" v-show="lists.length == 0">
      <img src="http://demo.guoyuan.ld-web.com/mobile/themes/ld-web/images/ico_13.png" alt />
      <p>没有宝贝哦，不如去添加宝贝</p>
    </div>
    <h1 v-show="lists.length == 0" class="shaping">
      <router-link to="/home/recommend">
        <van-button type="primary" class="shaping">去购物</van-button>
      </router-link>
    </h1>

    <div v-for="(item,index) in lists" :key="index">
      <van-card
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        thumb="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/2_thumb_G_1502250237688.jpg"
      >
        <div slot="tags">
          <van-tag plain @click="item.num <=1?1:item.num--">-</van-tag>
          <input type="text" v-model="item.num" class="num" />
          <van-tag plain @click="item.num++">+</van-tag>
        </div>
        <div slot="footer">
          <div class="checkboxselect" @click="inputselect(index)">
            <van-icon name="success" v-show="item.isSelect" />
          </div>
          <!-- <input type="checkbox" class="checkboxbutton" :checked="item.isSelect" @click="inputselect(index)"> -->
          <van-button size="mini" class="delbutton" @click="del(index)">删除</van-button>
        </div>
      </van-card>
    </div>

    <div v-show="lists.length == 0">
      <van-divider dashed>猜你喜欢</van-divider>

      <router-link to="/details" tag="a">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="加拿大蕾妮樱桃 "
          thumb="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/2_thumb_G_1502250237688.jpg"
        />
      </router-link>
      <router-link to="/details" tag="a">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="大个深山黄桃"
          thumb="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/1_thumb_G_1502164611417.jpg"
        />
      </router-link>
    </div>

    <van-submit-bar
      :price="totals * 100"
      button-text="提交订单"
      @submit="onsubmit"
      v-show="lists.length != 0"
    >
      <van-checkbox @click="checkAll" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lists: [],
      totals: 0, //总价格
      checked: true //默认全选
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
    },
    // 控制全选与反选
    checkAll() {
      this.lists.forEach(data => {
        data.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      //第一次页面加载过程中，判断数据中isSelet状态，如果全部为true，那么返回true
      this.checked = this.lists.every(item => {
        return item.isSelect; //只有选项中全部为true，返回true。只要有一个false，返回false
      });
    },
    // 单击商品列表选项操作
    inputselect(index) {
      // 修改商品列表数据
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
    },
    // 总价格计算
    sum() {
      // 总价格计算
      // reduce()返回计算总价格
      // total 总价格累加
      // item 数据中对象
      this.totals = this.lists.reduce((total, item) => {
        // 判断选项
        if (!item.isSelect) return total; //false不让计算总价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认参数值为0
    },
    onsubmit() {
      // 判断用户名是否为空
      // 为空：跳转登陆页面
      // 不为空:订单页面
      if (this.$store.state.username) {
        this.$router.push("/order");
      } else {
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.sum(); //执行计算总价格
    this.checkboxclick();
  },
  beforeUpdate() {
    this.sum(); //执行计算总价格
  }
};
</script>

<style lang="scss" scoped>
.ico_13 {
  display: block;

  img {
    width: 1.875rem;
    height: 2.125rem;
    margin: 1rem auto;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
}
.shaping {
  button {
    text-align: center;
    background: #6bd0a2;
    margin: 0.625rem 3.825rem 0.875rem;
    border: none;
    font-size: 18px;
    color: #fff;
  }
}
.van-submit-bar {
  bottom: 50px;
}
.checkboxbutton {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -20px;
}
.delbutton {
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.num {
  width: 30px;
  text-align: center;
  font-size: 16px;
}
.checkboxselect {
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #c8c9cc;
  i {
    display: block;
    width: 20px;
    height: 20px;
    background: #1989fa;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
    font-size: 16px;
    color: #fff;
  }
}
</style>