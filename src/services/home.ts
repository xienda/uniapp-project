import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner',
        data: {
            distributionSite,
        },
    })


}

// /home/category / mutli
// 首页前台分类
export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/mutli',
    })

}
// https://pcapi-xiaotuxian-front-devtest.itheima.net
// 热门推荐

export const getHomeHotAPI = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/hot/mutli'
    })

}