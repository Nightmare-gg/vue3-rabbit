import request from '@/utils/http'

// 获取详情接口
export const getCheckoutInfoAPI =()=> {
    return request({
        url: '/member/order/pre'
    })
}