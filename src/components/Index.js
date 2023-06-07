// components中的所有组件都进行全局注册
// 通过插件的方法
import ImageView from './ImageView/Index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin={
    install(app) {
        // app.component('组件名字',组件配置对象)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}