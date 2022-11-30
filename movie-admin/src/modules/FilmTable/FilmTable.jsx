import {
  Table,
  Input,
  Button,
  Space,
  Form,
  Modal,
  Radio,
  DatePicker,
  Switch,
  InputNumber,
  Rate
} from "antd";
import React, { useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAsync } from "../../hooks/useAsync";
import { fetchMovieListAPI } from "../../service/Flim/film";
import { useNavigate } from "react-router-dom";

export default function FilmTable() {
  const navigate = useNavigate() 
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const { state: data = [] } = useAsync({
    dependencies: [],
    service: () => fetchMovieListAPI(),
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
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      width: 50,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: 120,
      responsive: ["sm"],
      render: (text, object) => {
        return <img src={text} alt={object.tenPhim} width={50} height={50} />;
      },
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: 300,
      render: (text) => {
        return <p style={{ fontWeight: "bold" }}>{text}</p>;
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      responsive: ["lg"],
      render: (text, object) => {
        return (
          <p>
            {object.moTa.length > 50
              ? object.moTa.substr(0, 50) + "..."
              : object.moTa}
          </p>
        );
      },
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      responsive: ["lg"],
      render: (ele) => <Rate disabled defaultValue={ele} />,
    },
    {
      title: "Thao tác",
      dataIndex: "thaoTac",
      width: 120,
      render: (_, object) => (
        <Space size="middle">
          <>
            <Button onClick={()=> navigate(`/admin/FilmManagement/${object.maPhim}/edit`)} type="primary" icon={<EditOutlined />}></Button>
          </>
          <Button type="primary" danger icon={<DeleteOutlined />} onClick>
            {/* Edit  */}
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Search
        className="mb-3"
        placeholder="Search Movie Name"
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
          Thêm Phim
        </Button>
        <Modal
          open={open}
          title="Thêm Phim"
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
            <Form.Item label="Form Size">
              <Radio.Group
                defaultValue={componentSize}
                onChange={onFormLayoutChange}
              >
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Tên Phim" name="tenPhim">
              <Input />
            </Form.Item>
            <Form.Item label="Trailer" name="trailer">
              <Input />
            </Form.Item>
            <Form.Item label="Mô tả" name="moTa">
              <Input />
            </Form.Item>
            <Form.Item label="Ngày Khởi Chiếu" name="ngayKhoiChieu">
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Đang Chiếu"
              valuePropName="checked"
              name="dangChieu"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Sắp Chiếu"
              valuePropName="checked"
              name="sapChieu"
            >
              <Switch />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked" name="hot">
              <Switch />
            </Form.Item>
            <Form.Item label="Đánh Giá" name="danhGia">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Hình ảnh">
              <Input type="file" />
            </Form.Item>
            {/* <Image /> */}
          </Form>
        </Modal>
      </>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
