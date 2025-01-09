import type { PageParams } from "@/types/global"
import { http } from "@/utils/http"

// https://pcapi-xiaotuxian-front-devtest.itheima.net
// 通用热门推荐类型
type HotParams = PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
    return http({
        method: 'GET',
        url,
        data
    })
}