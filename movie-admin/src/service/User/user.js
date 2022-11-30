import { request } from "../../configs/axios"
import {GROUP_ID} from '../../constants/common'

const fetchLoginUserAPI = (data)=>{
    return request({
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
        data: data,
    })
};
const fetchTakeListUserAPI = (tuKhoa = "") => {
    return request({
      url:
        tuKhoa !== ""
          ? `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`
          : `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
      method: "GET",
    });
  };
const fetchAddUserAPI = (data) => {
    return request({
      url: `/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: data,
    });
};
const fetchTakeInfoUserAPI = (taiKhoan) => {
    return request({
      url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,
      method: "POST",
    });
  };
  
  const fetchUpdateInfoUserAPI = (data) => {
    return request({
      url: `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "POST",
      data: data,
    });
  };
  
  const fetchDeleteUserAPI = (taiKhoan) => {
    return request({
      url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
    });
  };

export {
    fetchLoginUserAPI, 
    fetchAddUserAPI, 
    fetchDeleteUserAPI, 
    fetchUpdateInfoUserAPI,
    fetchTakeListUserAPI, 
    fetchTakeInfoUserAPI 
}