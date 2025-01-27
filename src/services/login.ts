import { http } from "@/utils/http"


type LoginParams = {
    code: string
    encryptedData: string
    iv: string
}

// 小程序登录
export const postLoginWxMinAPI = (data: LoginParams) => {
    return http({
        method: 'POST',
        url: '/login/wxMin',
        data,
    })
}


// 登录 内测


export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
    return http({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber,
        },
    })
}