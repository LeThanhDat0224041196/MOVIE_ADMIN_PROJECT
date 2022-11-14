import { notification } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { MaLoaiNguoiDung } from '../../enums/common';

export default function AdminGuards() {
  const userState = useSelector((state)=> state.userReducer);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!userState.userInfo){
      return navigate('/');
    }
    if(userState.userInfo && userState.userInfo.maLoaiNguoiDung !== MaLoaiNguoiDung.QuanTri){
      notification.warning({
        message: "Not an Admin account, you can't access the Admin page !!!"
      });
      return navigate('/')
    }
  })
  return <Outlet />
}
