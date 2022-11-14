import { request } from "../../configs/axios"
import {GROUP_ID} from '../../constants/common'

const fetchLoginUserAPI = (data)=>{
    return request({
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
        data: data,
    })
}


export {
    fetchLoginUserAPI
}