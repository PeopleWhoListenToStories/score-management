import React, { useEffect } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './student.module.scss'
import { Table, Form, Input, Button, Select, Popconfirm } from 'antd';



export default function Student() {
    const { Stu, Class } = useStore();
    const { Option } = Select;
    const { useForm } = Form;

    const [addConsumerForm] = useForm();

    useEffect(() => {
        Stu.list();
    }, [Stu])
    function confirm(val: any) {
        Stu.Del(val.student_id);
    }

    function cancel(e: any) {
        console.log(e);
    }



    const onFinish = (values: any) => {
        console.log('Success:123', values,);
        // const newList = new Proxy(Stu.stulist, {
        //     get:(target, key, receiver)=>{
        //         console.log(target, key, receiver,'obj, prop, newval')
        //     }
        // })
        // const list = Stu.stulist.filter((v:any)=>v.student_name === values.student_name);
    };

    const columns = [
        {
            title: '姓名',
            dataIndex: 'student_name',
            key: 'student_name',
            render: (text: any) => <span>{text}</span>,
        },
        {
            title: '学号',
            dataIndex: 'student_id',
            key: 'student_id',
        },
        {
            title: '班级',
            dataIndex: 'class',
            key: 'class',
        }, {
            title: '教室',
            dataIndex: 'room',
            key: 'room',
        }, {
            title: '密码',
            dataIndex: 'student_pwd',
            key: 'student_pwd',
        },
        {
            title: '操作',
            key: 'action',
            render: (text: number, record: any) => {
                return <span>
                    {
                        <Popconfirm
                            title="确定要删除这项任务吗?"
                            onConfirm={() => {
                                confirm(record)
                            }}
                            onCancel={cancel}
                            okText="确定"
                            cancelText="取消"
                        >
                            <span   >删除</span>
                        </Popconfirm>
                    }
                </span>
            }
        },
    ];

    return useObserver(() =>
        <div className={style.studentBox} >
            <Form
                name="basic"
                onFinish={onFinish}
                form={addConsumerForm}
                initialValues={{ grade_name: '', room_text: '请选择教室号', subject_text: '请选择课程' }}
                className={style.forms}
                style={{ display: 'flex' }}
            >
                <Form.Item
                    name="grade_name"
                    style={{padding:'0 20px 0 0'}}
                    rules={[{ required: true, pattern: /^[0-9a-zA-Z\u4E00-\u9FA5]+$/, message: '输入正确的用户名' }]}
                >
                    <Input placeholder='姓名' style={{width:'100%'}}/>
                </Form.Item>

                <Form.Item
                    name="room_text"
                    style={{padding:'0 20px 0 0'}}
                    rules={[
                        {
                            required: true,
                            message: '请输入教室号!',
                        },
                    ]}
                >
                    <Select placeholder="请选择教室号" style={{ width: 180 }}  >
                        {
                            Class.classlist && Class.classlist.map((item: any, index) => {
                                return <Option key={index} value={item.room_id}>{item.room_text}</Option>
                            })
                        }
                    </Select>

                </Form.Item>
                <Form.Item
                    name="subject_text"
                    style={{padding:'0 20px 0 0'}}
                    rules={[
                        {
                            required: true,
                            message: '请输入课程名!',
                        },
                    ]}
                >
                    <Select className={style.Select} placeholder="请选择课程" style={{ width: 180 }}  >
                        {
                            Class.classlist && Class.classlist.map((item: any, index) => {
                                return <Option key={index} value={item.subject_id}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit"style={{width:120,background:'linear-gradient(45deg, #063DFD,#5395F7 )'}} >搜索</Button>
                <Button type="primary" style={{width:120,background:'linear-gradient(45deg, #063DFD,#5395F7 )'}} onClick={() => addConsumerForm.resetFields()} >重置</Button>

            </Form>
          <div className={style.inner}>
          <Table columns={columns} dataSource={Stu.stulist && Stu.stulist} rowKey={(r) => r.student_id} />
          </div>
        </div>
    )
}




