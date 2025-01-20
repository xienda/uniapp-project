

import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

// https://pcapi-xiaotuxian-front-devtest.itheima.net
// 分类列表
export const getCategoryTopAPI = () => {
    return http<CategoryTopItem[]>({
        method: 'GET',
        url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/category/top',
    })


}