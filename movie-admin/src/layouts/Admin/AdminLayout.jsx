import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setAccountUser } from "../../store/actions/userAction";
import { USER_ACCOUNT_KEY } from "../../store/types/type";
import "./Admin.scss";

export default function AdminLayout() {
  const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(false);
  const { Header, Sider, Content, Footer } = Layout;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const handleLogOut = () => {
    localStorage.removeItem(USER_ACCOUNT_KEY);
    dispatch(setAccountUser(null));
    navigate("/");
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="xxl"
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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "User Management",
              onClick: () => {
                navigate("/admin/UserManagement");
              },
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Film Management",
              onClick: () => {
                navigate("/admin/FilmManagement");
              },
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background site-layout-sub-header-background site-header-icons"
          style={{
            padding: 0,
          }}
        >
          <>
            {userState.userAccount ? (
              <span className="flex items-center ml-auto mr-3">
                Hello {userState.userAccount.taiKhoan} !
                <span className="ml-2 flex">
                  <Avatar
                    className="uppercase"
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >
                    {userState.userAccount.taiKhoan.substr(0,1)}
                  </Avatar>
                </span>
                <button type="button" className="btn btn-danger ml-2" onClick={handleLogOut}>Log Out</button>
              </span>
            ) : (
              ""
            )}
          </>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
