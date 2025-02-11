
// 加入购物车

import { http } from "@/utils/http"

// 加入购物车
export const postMemberCartAPI = (data: { skuId: string, count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data
    })
}