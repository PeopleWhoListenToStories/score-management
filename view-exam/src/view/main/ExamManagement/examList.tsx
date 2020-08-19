import React ,{useEffect} from 'react'
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
import { Table,Select ,Form,Button,} from 'antd';
import {useHistory} from 'react-router-dom'
import { SearchOutlined} from '@ant-design/icons';
export default function (){
  const history=useHistory()
    let {ExamManagement} =useStore()
    useEffect(()=>{
     ExamManagement.getExamList();
     ExamManagement.getExamTypedata();
    ExamManagement.getAllcourses();
    },[])
      function onFinish (values :any ) {
        console.log(values)
      //  await ExamManagement.addCreateExam(values.user)//创建
            //history.push('/main/edit')
      };
      
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span:5 },
};
    const columns = [
        {
          title: '试卷信息',
          dataIndex: 'title',
          key: '1',
          render: (text:number, record:any) => {
            return <>   
                 <p>{record.title}</p>
                <span>开始时间{new Date(record.start_time*1).toLocaleDateString()}</span>
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
          key:'3',
        },
        {
          title: '开始时间',
          dataIndex: 'start_time',
          key: '4',
          render: (text:number, record:any) => {
            return <span>
                {
                new Date(text*1).toLocaleString()
                }
            </span>
         }
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: '5',
            render: (text:number, record:any) => {
                return <span>
                    {
                  new Date(text*1).toLocaleString()
                    }
            </span>
             }
          },
        {
          title: '操作',
          key: '6',
          render: (text:number, record:any) => {
            return <span>
                {
                    <button onClick={()=>{ExamManagement.examdetail(record.exam_exam_id);history.push('/main/edits')}}>详情</button>
                }
        </span>
         }
        },
      ];
     return useObserver(()=>
    <div>
      <div>
      <Form {...layout}  name="nest-messages" onFinish={onFinish}>
        <Form.Item  name={['user', 'exam_id']}  label="考试类型" rules={[{ required: true }]}>
        <Select>
            {
               ExamManagement.ExamTypedata.map((item:any)=>{
                  return (
                      <Select.Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Select.Option>
                  )
               })
            }
        </Select>
        </Form.Item>
        <Form.Item  name={['user', 'subject_id']}  label="课程" rules={[{ required: true }]}>
        <Select>
        {
               ExamManagement.Allcoursesdata.map((item:any)=>{
                  return (
                      <Select.Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Select.Option>
                  )
               })
            }
        </Select>
        </Form.Item>
    <Form.Item
    wrapperCol={{
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
    }}
    >
    <Button type="primary" htmlType="submit" >
    <SearchOutlined /> 查询
    </Button>
    </Form.Item>
    </Form>
      </div>
      <Table columns={columns} dataSource={ExamManagement.Examdata}  rowKey={record => record.uid} />
    </div>
        
     )
    }