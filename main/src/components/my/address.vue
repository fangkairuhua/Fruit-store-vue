<template>
  <div>
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)" />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
// 用户体验
// 测试：计算点击数

export default {
  data() {
    return {
      chosenAddressId: null, //默认选项
      list: [] //注意:v-model双向数据绑定必须定义变量
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressAdd");
    },
    onEdit(item) {
      this.$router.push({
        path: "addressEdit",
        query: { index: item.id }
      });
    },
    onSelect(item) {
      this.$store.state.address.defaultId = item.id;
      this.$router.go(-1); //点击默认选择
    }
  },

  created() {
    this.list = this.$store.state.address.lists;
    this.chosenAddressId = this.$store.state.address.defaultId;
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
</style>