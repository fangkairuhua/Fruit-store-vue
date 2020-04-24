<template>
    <div>
        
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />

        <van-address-edit
        :area-list="areaList"
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        />
    </div>
</template>

<script>
    import areaList from "./erea.js";

    export default {
        data() {
            return {
                areaList,
                searchResult: []
            }
        },
        methods: {
            onSave({name,tel,province,city,county,addressDetail,areaCode}) {
                this.$store.commit("address/add",{
                    name,
                    tel,
                    province,
                    city,
                    county,
                    addressDetail,
                    address: province+city+county+addressDetail,
                    areaCode
                })
                this.$router.go(-1); //回到上一级列表页
            },
        },
        
        created(){
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>

</style>