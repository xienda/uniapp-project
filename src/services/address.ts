

// /member/address 添加收货地址
import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/address'
import { http } from "@/utils/http"

export const postMemberAddressAPI = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data,
    })
}

// 获取收货地址列表
export const getMemberAddressAPI = () => {
    return http<AddressItem[]>({
        method: 'GET',
        url: '/member/address',
    })
}


// 获取收货地址列表 id 地址id 路径参数
export const getMemberAddressByIdAPI = (id: string) => {
    return http<AddressItem>({
        method: 'GET',
        url: '/member/address'
    })

}
