import React, { useEffect } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import { Table, Select, Form, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';
import style from './examList.module.css'
export default function () {
  const history = useHistory()
  let { ExamManagement } = useStore()
  useEffect(() => {
    ExamManagement.getExamList();
    ExamManagement.getExamTypedata();
    ExamManagement.getAllcourses();
  });

  async function onFinish(values: any) {
    await ExamManagement.getdata(values.user.exam_id, values.user.subject_id)
    history.push('/main/condition')
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const columns = [
    {
      title: '试卷信息',
      dataIndex: 'title',
      key: '1',
      render: (text: number, record: any) => {
        return <>
          <p>{record.title}</p>
          <span>开始时间{new Date(record.start_time * 1).toLocaleDateString()}</span>
          <span>{record.number}作弊0分</span>
        </>
      }
    },
    {
      title: '班级',
      dataIndex: 'grade_name',
      key: '2',
    },
    {
      title: '创建人',
      dataIndex: 'user_name',
      key: '3',
    },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      key: '4',
      render: (text: number, record: any) => {
        return <span>
          {
            new Date(text * 1).toLocaleString()
          }
        </span>
      }
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      key: '5',
      render: (text: number, record: any) => {
        return <span>
          {
            new Date(text * 1).toLocaleString()
          }
        </span>
      }
    },
    {
      title: '操作',
      key: '6',
      render: (text: number, record: any) => {
        return <span>
          {
            <Button onClick={() => { ExamManagement.examdetail(record.exam_exam_id); history.push('/main/edits') }}>详情</Button>
          }
        </span>
      }
    },
  ];
  return useObserver(() =>
    <div>
      <div>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Row style={{ width: 800 }}>
            <Col style={{ width: 350 }}>
              <Form.Item name={['user', 'exam_id']} label="考试类型" rules={[{ required: true }]} >
                <Select style={{ width: 200 }}>
                  {
                    ExamManagement.ExamTypedata.map((item: any, index: any) => {
                      return (
                        <Select.Option value={item.exam_id} key={index}>{item.exam_name}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name={['user', 'subject_id']} label="课程" rules={[{ required: true }]}>
                <Select style={{ width: 200 }}>
                  {
                    ExamManagement.Allcoursesdata.map((item: any, index: any) => {
                      return (
                        <Select.Option value={item.subject_id} key={index}>{item.subject_text}</Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 20 }}
            >
              <Button type="primary" htmlType="submit" >
                <SearchOutlined /> 查询
         </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
      <div className={style.tablebox}>
        <Table columns={columns} dataSource={ExamManagement.Examdata} rowKey={(record) => record.exam_exam_id} />
      </div>
    </div>

  )
}