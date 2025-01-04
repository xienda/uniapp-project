import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner',
        data: {
            distributionSite,
        },
    })


}