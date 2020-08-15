import React from 'react'
import { Table } from 'antd';

const columns = [
  { title: '班级名', dataIndex: 'class', key: 'class' },
  { title: '课程名', dataIndex: 'scal', key: 'scal' },
  { title: '教室号', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>修改</a>,
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>删除</a>,
  },
];

const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
  
export default function classManage() {
    return (
        <div>
            班级管理
            <Table
                columns={columns}
                dataSource={data}
            />,
        </div>
    )
}





