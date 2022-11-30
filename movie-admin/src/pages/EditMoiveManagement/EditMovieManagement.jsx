import { Button, DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import React, { useState } from "react";

export default function EditMovieManagement() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
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
      <Form.Item label="Tên Phim">
        <Input
          name="tenPhim"
        //   onChange={formik.handleChange}
        //   value={formik.values.tenPhim}
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input
          name="trailer"
        //   onChange={formik.handleChange}
        //   value={formik.values.trailer}
        />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker
        //   locale={locale}
        //   onChange={handleChangeDate}
        //   format="DD/MM/YYYY"
        //   value={moment(formik.values.ngayKhoiChieu, "DD/MM/YYYY")}
        />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch
        //   onChange={handleChangField("sapChieu")}
        //   checked={formik.values.sapChieu}
        />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch
        //   onChange={handleChangField("hot")}
        //   checked={formik.values.hot}
        />
      </Form.Item>
      <Form.Item label="Số sao">
        <InputNumber
        //   onChange={handleChangField("danhGia")}
        //   min={1}
        //   max={10}
        //   value={formik.values.danhGia}
        />
      </Form.Item>
      <Form.Item label="Tác vụ">
      <Button htmlType='submit' type='primary'>
          Cập Nhật
        </Button>
      </Form.Item>
    </Form>
  );
}
