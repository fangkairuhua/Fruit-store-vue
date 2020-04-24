// 我的地址
export default {
    namespaced: true, //命名空间
    state:{
        lists:[
            {
            name: "张三",
            tel: "13099998888",
            province: "山西省",
            city: "晋中市",
            county: "和顺县",
            addressDetail: "1231231",
            address: "山西省晋中市和顺县1231231",
            areaCode: "140723",
            isDefault: true,
            id: 1,
            }
        ],
        defaultId:1, //默认选项id
    },
    mutations:{
        add(state,obj){
            // 把去除默认选项
            state.lists.forEach((item)=>{
                item.isDefault = false;
            })
            // 处理id
            obj.isDefault = true;
            obj.id = state.lists.length + 1;
            state.lists.push(obj); //添加地址
        },
        // 修改地址
        edit(state,obj){
            let index = state.lists.findIndex(item=>item.id == obj.id); //数组下标
            state.lists[index] = obj;
        }
    },
    acttions:{
    },
    getters:{},
    modules:{}
}