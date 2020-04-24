<template>
  <div >
    <!-- 轮播图 -->
 
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../assets/img/1.jpg" width="360" height="168" border="0" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/img/2.jpg" width="360" height="168" border="0" />
      </van-swipe-item>

      <van-swipe-item>
        <img src="../../assets/img/3.jpg" width="360" height="168" border="0" />
      </van-swipe-item>
    </van-swipe>
 
    <!-- 轮播图 -->

    <!-- 搜索 -->
    <van-search @focus="getSearch" placeholder="搜本站商品" shape="round" background="#ebeced" />
    <!-- 搜索 -->

    <!-- 分类 -->
    <van-row>
      <van-col span="6">
        <van-image
          width="60"
          height="60"
          src="http://aimg8.dlszyht.net.cn/wap/defineIcon/1466957/1200/2398292_1496813063.png?t=9685#240#240"
        />
      </van-col>
      <van-col span="6">
        <van-image
          width="60"
          height="60"
          src="http://aimg8.dlszyht.net.cn/wap/defineIcon/1466957/1200/2398294_1496813090.png?t=9625#240#240"
        />
      </van-col>
      <van-col span="6">
        <van-image
          width="60"
          height="60"
          src="http://aimg8.dlszyht.net.cn/wap/defineIcon/1466957/1200/2398299_1496813137.png?t=1147#240#240"
        />
      </van-col>
      <van-col span="6" @click="$router.push('/category')">
        <van-image
          width="50"
          height="50"
          src="http://aimg8.dlszyht.net.cn/wap/defineIcon/1466957/1200/2398302_1496813169.png?t=8409#234#240"
        />
        <br />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="6">时下热销</van-col>
      <van-col span="6">新品推荐</van-col>
      <van-col span="6">每天福利</van-col>
      <van-col span="6">全部分类</van-col>
    </van-row>

    <!-- 分类 end -->

    <van-swipe class="my-swipe mySwiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="http://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2017_06_02/tmp1496387833_1466957_s.jpg"
          width="360"
          height="168"
          border="0"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="http://aimg8.dlszyht.net.cn/ev_user_module_content_tmp/2017_06_02/tmp1496387833_1466957_s.jpg"
          width="360"
          height="168"
          border="0"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 头条 -->
    <van-row class="toutiao">
      <van-col span="4" class="touleft">头条</van-col>
      <van-col span="20" class="touright">无土栽培青菜受欢迎</van-col>
    </van-row>
    <!-- 头条 -->

    <!-- 商品列表 -->
    <!-- 版块 -->
    <div style="width:100%;height:100%">
      <ul class="item-pic-l2-r1">
        <span>|</span>
        推荐板块
        <li>
          <a href="#">
            <img src="../../assets/img/5.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/7.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/8.jpg" />
          </a>
        </li>
      </ul>

      <ul class="items">
        <span>|</span>
        推荐板块
        <li>
          <a href="#">
            <img src="../../assets/img/6.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/9.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/10.jpg" />
          </a>
        </li>
      </ul>
    </div>

    <!-- 版块 d-->

    <section class="item_show_box1 box1 region">
      <span class="tit-img">
        <img
          class="ll_fadeIn"
          style="width:100% ; height: 100%; opacity: 1;"
          src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
        />
      </span>
      <div class="borderBottom">
        <span>|</span>精品推荐
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/8_thumb_G_1502250621920.jpg"
              alt="云南无籽红提  "
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>99.0</span>
            </span>
            <!-- <br />
            <sapn>云南无籽红提</sapn>-->
            <p class="priceBottom">云南无籽红提</p>
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/9_thumb_G_1502250681318.jpg"
              alt="加拿大蓝莓 "
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>32.8</span>
            </span>
            <!-- <br />
            <span>加拿大蓝莓</span>-->
            <p class="priceBottom">云南无籽红提</p>
          </div>
        </div>
      </div>
      <div class="flex flex-f-row">
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
              <span>108.0</span>
            </span>
            <!-- <br />
            <span>橙先生-澳大利亚脐橙</span>-->
            <p class="priceBottom">橙先生-澳大利亚脐橙</p>
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/5_thumb_G_1502250440796.jpg"
              alt="巨峰葡萄            "
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>31.8</span>
            </span>
            <!-- <br />
            <span>巨峰葡萄</span>-->
            <p class="priceBottom">巨峰葡萄</p>
            <!-- <h6>巨峰葡萄</h6> -->
          </div>
        </div>
      </div>
    </section>

    <section class="item_show_box1 box1 region">
      <!-- <h6 class="borderBottom">新品上市</h6> -->
      <div class="borderBottom">
        <span>|</span>新品上市
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in" to="/details">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/4_thumb_G_1502250383306.jpg"
              alt="橙先生-澳洲巧克力橙"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>99.0</span>
            </span>

            <p class="priceBottom">橙先生-澳洲巧克力橙</p>
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/3_thumb_G_1502250301104.jpg"
              alt="山青梨"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>32.8</span>
            </span>
            <!-- <br />
            <h6>山青梨</h6>-->
            <p class="priceBottom">山青梨</p>
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

            <!-- <h6>加拿大蕾妮樱桃</h6> -->
            <!-- <span>加拿大蕾妮樱桃</span> -->
            <p class="priceBottom">加拿大蕾妮樱桃</p>
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

            <!-- <h6>大个深山黄桃</h6> -->
            <!-- <span>大个深山黄桃</span> -->
            <p class="priceBottom">大个深山黄桃</p>
          </div>
        </div>
      </div>
    </section>

    <section class="item_show_box1 box1 region">
      <!-- <h6 class="borderBottom">热卖商品</h6> -->
      <div class="borderBottom">
        <span>|</span>热卖商品
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/4_thumb_G_1502250383306.jpg"
              alt="橙先生-澳洲巧克力橙"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>99.0</span>
            </span>
            <!-- <br />
            <h6>橙先生-澳洲巧克力橙</h6>-->
            <p class="priceBottom">橙先生-澳洲巧克力橙</p>
          </div>
        </div>
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/3_thumb_G_1502250301104.jpg"
              alt="山青梨"
            />
          </router-link>
          <div style="text-align:center">
            <span class="price_s">
              ￥
              <span>32.8</span>
            </span>
            <!-- <br />
            <h6>山青梨</h6>-->
            <p class="priceBottom">山青梨</p>
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
        </div>
      </div>
    </section>

    <section class="item_show_box1 box1 region">
      <!-- <h6 class="borderBottom">热卖商品</h6> -->
      <div class="borderBottom">
        <span>|</span>特价促销
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

    <section class="item_show_box1 box1 region">
      <!-- <h6 class="borderBottom">鲜果</h6> -->
      <div class="borderBottom">
        <span>|</span>鲜果
      </div>
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/4_thumb_G_1502250383306.jpg"
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
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/14_thumb_G_1502251030558.jpg"
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
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/13_thumb_G_1502250985877.jpg"
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
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/12_thumb_G_1502250922411.jpg"
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
      <div class="flex flex-f-row">
        <div class="goodsItem flex_in">
          <router-link to="/details" tag="a">
            <img
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/11_thumb_G_1502250817707.jpg"
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
              src="http://demo.guoyuan.ld-web.com/images/201708/thumb_img/10_thumb_G_1502250738022.jpg"
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
    <!-- 商品列表 end -->

    <section class="item_show_box1 box1 region">
      <div class="shiPin">
        <video
          src="https://ugcws.video.gtimg.com/uwMROfz2r57IIaQXGdGnC2deB3a68h7RbNY_Gt5C9JU_xJQ7/szg_20685423_50001_fd8fd7ede6fa4728a329ba63955a2a2f.f612.mp4?sdtfrom=v3010&guid=f2e16ec4cf8c779db8ff99b05d77e499&vkey=AC889B3DB6858E3912B47FE92FE45A8D7F7037CA64CEAFBE760DCBBB709A74BA74839983EC1C6BB665EAB453455B973E4981F9A4CFF07C7CFF38EFD415C2126DE384D1E2E48E736187A5B4309F1143788E15C28E26A0253D1AF89D187A05C40082B4900CAF941A094483FD8973761F96D4CF060DA1133E00F99F6174B4661377&platform=2"
          width="100%"
          height="100%"
          controls="controls"
        ></video>
      </div>
    </section>

    <section class="item_show_box1 box1 Icp">
      <p class="region">
        ICP备案证书号:
        <a href="http://www.miibeian.gov.cn/" target="_blank">粤1603604号</a>
        © 2005-2020 水果商城 版权所有，并保留所有权利。
      </p>
    </section>
  </div>
</template>

<script>
// import swiper from "../public/swiper.vue";
import Swiper from "swiper";
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
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
.Icp {
  text-align: center;

  color: #aaa;
  font-size: 11px;
  a {
    color: #000000;
    text-decoration: none;
  }
}
.shiPin {
  width: 100%;
  margin: 3px;
  background: #fff;
}
.van-row {
  background: #fff;
  .van-col {
    // height: 70px;
    // line-height: 70px;
    text-align: center;
    font-size: 15px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.mySwiper {
  margin: 10px 0 10px 0;
}

.toutiao {
  height: 40px;
  margin: 10px 0 10px 0;
  background: #fff;
  .touleft {
    height: 40;
    line-height: 40px;
    text-align: center;
    color: #64a131;
    font-size: 21px;
    border-right: 1px solid #ccc;
  }
  .touright {
    height: 40;
    line-height: 40px;
    padding: 0 10px 0;
    font-size: 14px;
  }
}
.item-pic-l2-r1 {
  margin: 10px 0 10px 0;
  background: #64a131;
  font-size: 15px;
  color: #fff;
  span {
    background: #64a131;
    margin: 0 0px 0 5px;
    color: #fff;
  }
  img {
    width: 50%;
    height: auto;
    float: left;
    display: block;
  }
}

.items {
  background: #64a131;
  font-size: 15px;
  color: #fff;
  span {
    background: #64a131;
    margin: 0 0px 0 5px;
    color: #fff;
  }
  img {
    width: 50%;
    height: auto;
    float: right;
    display: block;
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