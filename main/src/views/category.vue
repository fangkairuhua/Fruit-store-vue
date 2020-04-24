<template>
  <div>
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <!-- <van-nav-bar
        :title="$route.name"
    />-->
    <div class="content">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :key="index"
            :class="{current:index==currentIndex}"
            @click="selectItem(index,$event)"
          >
            <span class="left-item">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <!-- 循环嵌套 -->
          <li v-for="(item,index) in right" :key="index" class="right-item right-item-hook">
            <span class="rightName">{{item.name}}</span>
            <ul>
              <li>
                <div class="commodityBox">
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img12.yiguoimg.com/d/items/2020/200302/9288740032325730_220.jpg"
                    />
                    全部
                  </router-link>
                  <!-- <a href=""  @click="$router.push('/details')" class="commodityList"> -->

                  <!-- </a> -->
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img10.yiguoimg.com/d/items/2020/200302/9288740031375458_220.jpg"
                    />
                    苹果
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img10.yiguoimg.com/d/items/2020/200302/9288740031342690_220.jpg"
                    />
                    柑桔橙柚
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img11.yiguoimg.com/d/items/2020/200302/9288740031277154_220.jpg"
                    />
                    蓝莓/莓类
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img14.yiguoimg.com/d/items/2020/200302/9288740031309922_220.jpg"
                    />
                    奇异果/猕猴桃
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img14.yiguoimg.com/d/items/2020/200302/9288740031244386_220.jpg"
                    />
                    梨
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img09.yiguoimg.com/d/items/2020/200302/9288740031211618_220.jpg"
                    />
                    葡萄/提子
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img14.yiguoimg.com/d/items/2020/200302/9288740031015010_220.jpg"
                    />
                    火龙果
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img14.yiguoimg.com/d/items/2020/200302/9288740030851170_220.jpg"
                    />
                    原箱水果
                  </router-link>
                  <router-link to="/details" tag="a" class="commodityList">
                    <img
                      src="https://img12.yiguoimg.com/d/items/2020/200302/9288740030818402_220.jpg"
                    />
                    时令水果
                  </router-link>
                  <a href="javascript:;" class="commodityList">
                    <img
                      src="https://img12.yiguoimg.com/e/items/2017/170615/9288709121516239_220.jpg"
                    />
                    礼品礼盒
                  </a>
                </div>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data: function() {
    return {
      left: [
        "果园推荐",
        "全球鲜果",
        "生鲜美食",
        "水果饮品",
        "礼品卡卷",
        "有机肥料"
      ],
      right: [
        { name: "果园推荐", content: [1, 2, 3, 4, 5, 6] },
        { name: "全球鲜果", content: [1, 2, 3, 4] },
        { name: "生鲜美食", content: [1, 2, 3, 4, 5] },
        { name: "水果饮品", content: [1, 2, 3, 4, 5] },
        { name: "礼品卡卷", content: [1, 2, 3, 4] },
        { name: "有机肥料", content: [1, 2, 3] }
      ],
      scrollY: 0,
      listHeight: [] //存储右边每一项li高度
    };
  },
  methods: {
    _initScroll() {
      // 联动实例化插件对象
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时时获取滚动高度
      });
      this.rights = new BScroll(this.$refs.right, {
        click: true, //拥有触发事件，
        probeType: 3 //探针的效果，时时获取滚动高度
      });

      // right这个对象监听滚动事件，
      this.rights.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _getHeight() {
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      let height = 0; //默认高度
      this.listHeight.push(height); //添加高度数组中
      // 循环对象
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight; // 对象高度
        this.listHeight.push(height);
      }
    },
    // 左侧点击效果
    // index 下标
    // event 点击对象事件
    selectItem(index, event) {
      // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
      // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
      if (!event._constructed) {
        return;
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[index];
        // scrollToElement()//滚动到指定的目标元素
        this.rights.scrollToElement(el);

        // 左边联动
        let leftItems = this.$refs.left.getElementsByTagName("li");
        let elLi = leftItems[index];
        this.lefts.scrollToElement(elLi);
      }
    }
  },
  // 生命周期函数
  mounted() {
    //页面渲染到浏览器时候
    // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
    // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
    // $nextTick() 让所有DOM执行完后，回调执行方法

    this.$nextTick(() => {
      this._initScroll(); //调用初始化联动效果
      this._getHeight(); //获取右边每一项高度

      // 跳转效果
      if ("id" in this.$route.query) {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        let el = rightItems[this.$route.query.id];
        this.rights.scrollToElement(el);
      }
    });
  },
  // 计算属性
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // 左边联动
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLi = leftItems[i];
          this.lefts.scrollToElement(elLi);
          return i;
        }
      }
      // 如果this.listHeight没有值，返回0
      return 0;
    }
  }
};
</script>

<style lang="scss" scoped>
// scoped 样式覆盖
.content {
  display: flex;
  position: absolute;
  /* 定位里面不写定义左右样式，不写高度，自动获取高度 */
  top: 46px;
  bottom: 50px;
  // background-color: #eeeeee;
  width: 100%;
  border-top: 1px solid #ccc;
  overflow: hidden;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  border-right: 1px solid #ccc;
  // background-color: #C8EBFA;
}
.left li {
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.left li.current {
  background-color: #fff;
  color: #e93b3d;
}
.left-item {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
  height: 50px;
  text-align: center;
}
.right {
  flex: 1;
  //   background-color: #eeeeee;
}
.right-item {
  span {
    font-size: 14px;
    color: "#333";
    text-align: center;
    font-weight: bold;
  }
  ul {
    li {
      width: 100%;
      overflow: hidden;
      background: #fff;
      .commodityBox {
        width: 100%;
        padding: 0.5rem 1rem 50px 1rem;
        margin-left: 5px;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
        .commodityList {
          display: inline-block;
          width: 2.76rem;
          height: 3.18rem;
          position: relative;
          padding-top: 2rem;
          text-align: center;
          box-sizing: border-box;
          font-size: 0.38rem;
          color: #808080;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 1.89rem;
            height: 1.89rem;
            margin: 0 0.43rem;
          }
        }
      }
    }
  }
}
</style>

