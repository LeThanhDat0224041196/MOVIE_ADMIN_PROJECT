import { Button, Form, Input, Select } from "antd";
import React from "react";
import './EditUserManagement.scss'

export default function EditUserManagement() {
    const { Option } = Select;
    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
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
    //   className="pr-10"
  return (
    <div>
      <Form {...formItemLayout}>
        <h3 className="text-center pb-4">Cập nhật người dùng</h3>
        <Form.Item label="E-mail" tooltip="Ex: name123@gmail.com">
          <Input name="email" />
        </Form.Item>
        <Form.Item label="Tài khoản" tooltip="Trường này không được phép đổi" hasFeedback>
          <Input name="taiKhoan" disabled={true}/>
        </Form.Item>
        <Form.Item label="Mật khẩu" hasFeedback>
          <Input.Password name="matKhau"/>
        </Form.Item>
        <Form.Item label="Họ và tên" tooltip="Nguyễn Văn A" hasFeedback>
          <Input name="hoTen" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            style={{
              width: "100%",
            }}
            name="soDt"
            // onChange={formik.handleChange}
            // value={formik.values.soDt}
          />
        </Form.Item>
        <Form.Item label="Loại người dùng">
          <Select
            placeholder="Chọn loại người dùng"
            name="maLoaiNguoiDung"
            // onChange={handleChangeFeild}
            // value={formik.values.maLoaiNguoiDung}
          >
            <Option value="QuanTri">Quản Trị</Option>
            <Option value="KhachHang">Khách hàng</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
