// 管理用户数据相关

import { defineStore } from "pinia";
import {ref} from 'vue'
import {loginAPI} from '@/apis/User'
import {useCartStore} from'./cartStore'

export const useUserStore = defineStore('user',()=> {
   const cartStore= useCartStore()
    // 1.定义管理用户数据的state
    const userInfo = ref({})

    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({account,password})=> {
        const res = await loginAPI({account,password})
        userInfo.value = res.result
    }
// 退出时清空用户信息
    const clearUserInfo =()=> {
        userInfo.value={}
        // 执行清空购物车的action
        cartStore.clearCart()
    }

    // 3.以对象的格式把state和action retrun
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})