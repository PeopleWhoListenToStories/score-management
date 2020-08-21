import React, { useEffect, useState } from "react";
import { useObserver } from 'mobx-react-lite';
import ClassMateCss from "./classMate.module.scss";
import useStore from "../../../context/useStore";
import { Form, Table, Select, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const columns = [
  {
    // width:150,
    // align: 'center',
    title: '班级',
    dataIndex: 'grade_id',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    title: '姓名',
    dataIndex: 'student_name',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    title: '阅卷状态',
    dataIndex: 'status',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    title: '开始时间',
    dataIndex: 'start_time',
    key: "student_id",
    render: (text: any) => <span>{`${new Date(Number(text)).toLocaleDateString()}`}  {`${new Date().toLocaleTimeString().slice(2)}`}</span>,
  },
  {
    // width:150,
    // align: 'center',
    title: '结束时间',
    dataIndex: 'end_time',
    key: "student_id",
    render: (text: any) => <span>{`${new Date(Number(text)).toLocaleDateString()}`}  {`${new Date().toLocaleTimeString().slice(2)}`}</span>,
  },
  {
    // width:150,
    // align: 'center',
    title: '成材率',
    dataIndex: 'score',
    key: "student_id",
  },
  {
    // width:150,
    // align: 'center',
    title: '操作',
    key: 'student_id',
    render: (text: any) => (
      <Space size="middle">
        <a  >批改</a>
      </Space>
    ),
  },
];

const ClassMate: React.FC = () => {
  const { Class, Marking } = useStore();
  const [pageSize, UsePageSize] = useState<number>(10);
  const [current, UseCurrent] = useState<number>(1);
  useEffect(() => {
    Class.getClassmanage()
    Marking.getInitStudentAction()
  }, [])

  // 表单成功
  const onFinish = (values: any) => {
    console.log(values);
  };

  // Table 分页器的配置
  const paginationConfig = {
    pageSizeOptions: ['5', '10', '20', '50'],
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal: () => `共${Marking.StudentList.length}条`,
    pageSize: pageSize,
    current: current,
    total: Marking.StudentList.length,
    onShowSizeChange: (current: any, pageSize: any) => changePageSize(pageSize, current),
    onChange: (current: number) => changePage(current),
  }

  // 分页器修改页码
  function changePageSize(pageSize: number, current: number) {
    UsePageSize(pageSize)
    UseCurrent(current)
  }
  // 分页器修改页数
  function changePage(current: number) {
    UseCurrent(current)
  }


  const handleChange = () => {

  }

  return useObserver(() =>
    (<div className={ClassMateCss.wrapper}>
      <div className="top">
        <Form {...layout} name="nest-messages" onFinish={onFinish} initialValues={{ status: '请选择', grade: '请选择' }} >

          <Form.Item name={['status']} label="状态" rules={[{ required: false }]}>
            <Select style={{ width: 200 }} onChange={handleChange}>
              <Option value="0">0</Option>
              <Option value="1">1</Option>
            </Select>
          </Form.Item>

          <Form.Item name={['grade']} label="班级" rules={[{ required: false }]}>
            <Select style={{ width: 200 }} onChange={handleChange}>
              {
                Class.classlist && Class.classlist.map((item: any) => {
                  return <Option key={item.grade_name} value={item.grade_name}>{item.grade_name}</Option>
                })
              }
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" style={{ width: 120, borderRadius: '3px', backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }} icon={<SearchOutlined />}>  查询 </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={ClassMateCss.content}>
        <Table columns={columns} dataSource={Marking.StudentList} pagination={paginationConfig} rowKey={(record) => record.student_id} />
      </div>
    </div>)
  )
}

export default ClassMate;