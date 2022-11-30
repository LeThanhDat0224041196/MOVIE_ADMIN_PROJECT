import { Table, Input, Button, Space, Modal, Form, Radio, Select, Option} from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAsync } from "../../hooks/useAsync";
import { fetchTakeListUserAPI } from "../../service/User/user";
// import { getListUser } from "../../store/actions/userAction";
import { GET_LIST_USER } from "../../store/types/type";

export default function UserTable() {
  const { Search } = Input;
  const userListInfo = useSelector((state)=> state.userReducer);
  const navigate = useNavigate();
  const onSearch = (value) => console.log(value);
  const { state: data = [] } = useAsync({
    dependencies: [],
    service: () => fetchTakeListUserAPI(),
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      width: 30,
      render: (text) => {
        return <p style={{ fontWeight: "bold" }}>{text}</p>;
      },
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      responsive: ["sm"],
      width: 200,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: 120,
      responsive: ["sm"],
    },
    {
      title: "Email",
      dataIndex: "email",
      responsive: ["lg"],
      width: 200,
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      responsive: ["lg"],
    },
    {
      title: "Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Thao Tác",
      key: "thaoTac",
      with: 50,
      render: (_, object) => (
        <Space size="middle">
          <Button onClick={()=> navigate(`/admin/UserManagement/${object.taiKhoan}/edit`)}  type="primary" icon={<EditOutlined />}>

          </Button>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick>
            {/* Edit  */}
          </Button>
        </Space>
      ),
    },
  ];

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 14,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 14,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <>
      <Search
        className="mb-3"
        placeholder="Search User Name"
        onSearch={onSearch}
        enterButton
      />
      <>
        <Button
          className="mt-2 mb-3"
          onClick={showModal}
          type="primary"
          icon={<PlusOutlined />}
        >
          Thêm người dùng
        </Button>
        <Modal
          open={open}
          title="Thêm người dùng"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Save
            </Button>,
          ]}
        >
          <Form
            // layout="horizontal"
            {...formItemLayout}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Tài Khoản">
              <Input />
            </Form.Item>
            <Form.Item label="Họ và tên">
              <Input />
            </Form.Item>
            <Form.Item label="Mật Khẩu">
              <Input.Password />
            </Form.Item>
            <Form.Item label="Số điện thoại">
              <Input />
            </Form.Item>
            <Form.Item label="Loại người dùng">
              <Select placeholder='Chọn loại người dùng'>
                <Option value="QuanTri">Quản Trị</Option>
                <Option value="KhachHang">Khách Hàng</Option>
              </Select>
            </Form.Item>
            {/* <Form.Item {...tailFormItemLayout} label="Button">
              <Button>Button</Button>
            </Form.Item> */}
          </Form>
        </Modal>
      </>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
