import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './Admin.scss'
import {Outlet, useNavigate} from 'react-router-dom'
export default function AdminLayout() {
  const navigate = useNavigate();
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout
    style={{
      minHeight: '100vh' ,
    }} >
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'User Management',
            onClick: ()=>{navigate('/admin/UserManagement')}
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Flim Management',
            onClick: ()=>{navigate('/admin/FilmManagement')}
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px 0',
          padding: 24,
          minHeight: 280 ,
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}
