export default {
    namespaced: true, //命名空间
    state:{
        lists:[], //购物车数据
        num:0,//商品数量
    },
    mutations:{
        // 商品详情页添加数据
        add(state,obj){
            // 1.判断如果加入数据在，购物车中存在。数量加一
            // 获取不到相同id返回-1
            let index = state.lists.findIndex(val=>val.id == obj.id);
            if(index != "-1"){
                // 存在数据，数量加一
                state.lists[index].num += 1;
                state.num = state.lists[index].num; //修改数量
            }else{  
                // 不存在数据，数据添加购物车
                obj.isSelect = true; //默认选项
                state.lists.push(obj);
                state.num = 1; //修改数量
            }
        },
    },
    acttions:{},
    getters:{},
    modules:{}
}