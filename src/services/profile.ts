
//  https://pcapi-xiaotuxian-front-devtest.itheima.net
import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
    return http<ProfileDetail>({
        method: 'GET',
        url: '/member/profile',
    })
}