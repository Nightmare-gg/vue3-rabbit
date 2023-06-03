// 获取banner图
import httpInstance from "@/utils/http";

export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}

// 获取新鲜好物
export const getNewAPI = ()=> {
    return httpInstance({
        url: '/home/new'
    })
}

// 获取人气推荐

export const getHotAPI = ()=> {
    return httpInstance({
        url: 'home/hot'
    })
}