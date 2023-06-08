// 封装购物车模块
import { defineStore } from "pinia";
import {computed, ref} from 'vue'

export const useCartStore = defineStore('cart',()=> {
    // 1.定义state - cartList
    const cartList = ref([])
    // 2.定义action - addCart
    const addCart = (goods) => {
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路： 通过匹配传递过来的商品对象中的skuId能不能在cartLIst中找到，找到了就是添加过的
        const item = cartList.value.find((item)=> goods.skuId === item.skuId)
        if(item) {
            // 找到了
            item.count++
        }else {
            cartList.value.push(goods)
        }
    };
    // 购物车删除功能
    const delCart = (skuId)=> {
        // 思路：
        // 1.找到要删除项的下标值 - splice
        //  2.使用数组的过滤方法 - filter
        const idx = cartList.value.findIndex((item)=> skuId=== item.skuId)
        cartList.value.splice(idx,1)
    };
    // 单项功能
    const singleCheck = (skuId,selected)=> {
        // 通过skuId找到要修改的哪一项，然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item)=> item.skuId === skuId)
        item.selected = selected
    }
    // 购物车全选功能
    const allCheck = (selected)=> {
        // 把cartList中每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item=> item.selected=selected)
    } 

    // 是否全选计算属性
    const isAll = computed(()=> cartList.value.every((item)=> item.selected))
    // 计算购物车 计算属性
    // 1总的数量 所有项的count之和
    const allCount = computed(()=> cartList.value.reduce((a,c)=>a+c.count,0))
    // 2.总价 所有项的count*price之和
    const allPrice = computed(()=> cartList.value.reduce((a,c)=>a+c.count * c.price,0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
    }
},{
        persist: true
    
})