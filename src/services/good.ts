import { http } from "@/utils/http"

// 商品详情 id 商品id
export const getGoodsByIdAPI = (id: string) => {
    return http({
        method: 'GET',
        url: '/goods',
        data: {
            id,
        }
    })
}