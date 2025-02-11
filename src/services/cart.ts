
// 加入购物车

import type { CartItem } from "@/types/cart"
import { http } from "@/utils/http"

// 加入购物车
export const postMemberCartAPI = (data: { skuId: string, count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data
    })
}

// 获取购物车列表 /member/cart

export const getMemberCartAPI = () => {
    return http<CartItem[]>({
        method: 'GET',
        url: '/member/cart',
    })
}

// 删除购物车单品 请求体参数 ids SKUID 集合

export const deleteMemberCartAPI = (data: { ids: string[] }) => {
    return http({
        method: 'DELETE',
        url: '/member/cart',
        data
    })
}

// 修改购物车单品

export const putMemberCartBySkuIdAPI = (
    skuId: string,
    data: { selected?: boolean; count?: number },
) => {
    return http({
        method: 'PUT',
        url: `/member/cart/${skuId}`,
        data,
    })
}