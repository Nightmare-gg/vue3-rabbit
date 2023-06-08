// 封装支付接口
import request from '@/utils/http'

export const getOrderAPI =(id)=> {
    return request({
        url: `/member/order/${id}`
    })
}