import { request } from "../../configs/axios"
import {GROUP_ID} from '../../constants/common'

const fetchMovieListAPI = (tenPhim = "") => {
    return request({
      url:
        tenPhim !== ""
          ? `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`
          : `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
      method: "GET",
    });
};

const fetchAddMovieUploadPicAPI = (data) => {
    return request({
      url: `/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: data,
    });
  };

const fetchGetInfoMovieAPI = (maPhim) => {
    return request({
      url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
};
  
const fetchAddMovieUploadAPI = (data) => {
    return request({
      url: `/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: data,
    });
};

const fetchDeleteMovieApi = (maPhim) => {
    return request({
      url: `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    });
};

export {
    fetchMovieListAPI,
    fetchGetInfoMovieAPI,
    fetchAddMovieUploadAPI,
    fetchAddMovieUploadPicAPI,fetchDeleteMovieApi
}