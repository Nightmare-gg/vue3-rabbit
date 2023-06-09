// createRouter: 创建router实例对象
// createWebHistory: 创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Index.vue'
import Layout from '@/views/Layout/Index.vue'
import Home from '@/views/Home/Index.vue'
import Category from '@/views/Category/Index.vue'
import SubCategory from '@/views/SubCategory/Index.vue'
import Detail from '@/views/Detail/Index.vue'
import CartList from '@/views/CartList/Index.vue'
import Checkout from '@/views/Checkout/Index.vue'
import Pay from '@/views/Pay/Index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/Index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
   {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },{
          path: '/cartlist',
          component: CartList
         },
         {
          path: '/checkout',
          component: Checkout
         },
         {
          path:'/pay',
          component: Pay
         },
         {
          path:'paycallback',
          component: PayBack
         },
         {
          path: 'member',
          component: Member,
          children: [
            {
              path: 'user',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
         }
      ]
   },
   {
     path: '/login',
     component: Login,
   },

  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top:0
    }
  }
})



export default router
