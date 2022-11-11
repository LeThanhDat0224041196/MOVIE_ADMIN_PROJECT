import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../../components/Login/Login'

export default function LoginLayout() {
  return (
    <>
      <Login/>
      <Outlet />
    </>
  )
}
