import React, { useEffect, useState } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../context/useStore'
import Editor from 'for-editor'

import style from './addQues.module.css'
import {
    Form,
    Button,
    Select,
    Input,
    Modal
} from 'antd';
const { Option } = Select;
export default function AddQuestions() {
    let [visible, setVisible] = useState<boolean>(false)

    let { AllClass } = useStore()
    useEffect(() => {
        AllClass.getClassData()
    }, [])

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    let onFinish = (values: any) => {
        setVisible(false)
        console.log('Received values of form: ', values);
    };
    //展示确认
    let showModal = () => {
        setVisible(true)
    };
    //取消
    let handleCancel = () => {
        setVisible(false)
    };
    return useObserver(() =>
        <div className={style.Add_}>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                hideRequiredMark={true}

            >
                <Form.Item>
                    <span className="ant-form-text">题目信息</span>
                </Form.Item>
                <p>题干</p>
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    colon={false}
                >
                    <Input placeholder="请输入题目标题,不超过20个字" style={{ width: 350 }} />
                </Form.Item>

                <p>题目主题</p>
                <Form.Item name='ques'>
                    <Editor style={{ height: 500 }} />
                </Form.Item>
                <p>请选择考试类型:</p>
                <Form.Item
                    name="select1"
                    hasFeedback
                >
                    <Select style={{ width: 350 }}>
                        {
                            AllClass.AllexamType && AllClass.AllexamType.map((item: any, index) => {
                                return (
                                    <Option value={item.exam_name} key={index}>{item.exam_name}</Option>
                                )

                            })
                        }


                    </Select>
                </Form.Item>

                <p>请选择课程类型:</p>
                <Form.Item
                    name="select2"
                    hasFeedback
                >
                    <Select style={{ width: 350 }}>
                        {
                            AllClass.AllClass && AllClass.AllClass.map((item: any, index) => {
                                return (
                                    <Option value={item.subject_text} key={index}>{item.subject_text}</Option>
                                )

                            })
                        }
                    </Select>
                </Form.Item>

                <p>请选择题目类型:</p>
                <Form.Item
                    name="select3"
                    hasFeedback
                >
                    <Select style={{ width: 350 }}>
                        {
                            AllClass.Typedata && AllClass.Typedata.map((item: any, index) => {
                                return (
                                    <Option value={item.questions_type_text} key={index}>{item.questions_type_text}</Option>
                                )

                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item name='ques2'>
                    <p>答案信息</p>
                    <Editor style={{ height: 300 }} />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 0 }}>
                    <Button type="primary" onClick={showModal}>
                        提交
                    </Button>
                </Form.Item>

                <Modal
                    visible={visible}
                    onOk={onFinish}
                    onCancel={handleCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <p>你确认添加这道试题吗?</p>
                    <p>真的要添加吗?</p>
                </Modal>
            </Form>



        </div>
    )
}
