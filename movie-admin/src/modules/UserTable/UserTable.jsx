import { Table, Input,  Button, Space } from 'antd';
import React from 'react';
import {PlusOutlined} from '@ant-design/icons'
const { Search } = Input;
const onSearch = (value) => console.log(value);
const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    // responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    // responsive: ['lg'],
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

export default function UserTable() {
  return (
  <>
    <Search className='mb-3' placeholder="Search" onSearch={onSearch} enterButton />
        <>
        <Button className='mt-2 mb-3' type="primary" icon={<PlusOutlined />}> 
               Add
        </Button>
        </>
    <Table columns={columns} dataSource={data} />
  </>
  )
    
}
