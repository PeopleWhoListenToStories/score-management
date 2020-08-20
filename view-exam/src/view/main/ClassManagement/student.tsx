import React,{useState,useEffect} from 'react'
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
import { Table, Tag,Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 13,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 15,
    },
};

export default function Student() {
   const {Stu,Class}=useStore();
   const { Option } = Select;
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: (text:any) => <a>{text}</a>,
        },
        {
          title: '学号',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '班级',
          dataIndex: 'class',
          key: 'class',
        },{
            title: '教室',
            dataIndex: 'room',
            key: 'room',
          },{
            title: '密码',
            dataIndex: 'pwd',
            key: 'pwd',
          },
        {
            title: '操作',
            key: 'action',
            render: (text: number, record: any) => {
              return <span>
                {
                  <button className='btn' onClick={() => {
                    // Class.delList(record.grade_id)
                  }}>删除</button>
                }
              </span>
            }
          },
      ];
      
      const data = [
        {
          key: '1',
          name: '张三',
          id: '1',
          class: '1711a',
          room:'12306',
          pwd:'12345'
        },
        {
            key: '2',
            name: '李四',
            id: '2',
            class: '1711a',
            room:'15208',
            pwd:'11111'
          },
          {
            key: '3',
            name: '王五',
            id: '3',
            class: '1711b',
            room:'11111',
            pwd:'78796'
          },{
            key: '1',
            name: '赵六',
            id: '1',
            class: '1711a',
            room:'12344406',
            pwd:'11'
          },
      ];
      const onFinish = (values: any) => {
        console.log('Success:123', values);
    };
      
 

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }


    useEffect(()=>{
        Stu.list();
    },[])

    return useObserver(()=>
        <div>
            <Form 
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="班级名"
                    name="grade_name"
                    rules={[
                        {
                            required: true,
                            message: '请输入班级名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="教室号"
                    name="room_text"
                    rules={[
                        {
                            required: true,
                            message: '请输入教室号!',
                        },
                    ]}
                >
                    <Select defaultValue="请选择教室号" style={{ width: 180 }} onChange={handleChange}>
                        {
                           Class.classlist.map((item: any) => {
                                return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    label="课程名"
                    name="subject_text"
                    rules={[
                        {
                            required: true,
                            message: '请输入课程名!',
                        },
                    ]}
                >
                    <Select defaultValue="请选择课程" style={{ width: 180 }} onChange={handleChange}>
                        {
                            Class.classlist.map((item: any) => {
                                return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Button type="primary">搜索</Button>
                <Button type="primary">重置</Button>
                
            </Form>
          <Table columns={columns} dataSource={data} />
        </div>
    )
}
