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
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
export default function AddQuestions() {
    let [visible, setVisible] = useState<boolean>(false)
    let [formData, setformData] = useState<any>({})

    let { AllClass } = useStore()
    useEffect(() => {
        AllClass.getClassData()
    }, [AllClass])

    const formItemLayout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 14 },
    };
    //清空表单
    // const [form] = Form.useForm();
    // const onReset = () => {
    //     form.resetFields();
    // };
    let onFinish = (values: any) => {
        setVisible(true)
        setformData(values)
    };
    //确定提交
    let showModal = () => {
        setVisible(false)
        // onReset()
        let questions_id = sessionStorage.questions_id;
        console.log(questions_id)
        let questions_stem = formData.ques;
        let questions_type_id = formData.select3===AllClass.DetailData[0].questions_type_text?AllClass.DetailData[0].questions_type_id:formData.select3;
        let subject_id = formData.select2===AllClass.DetailData[0].subject_text?AllClass.DetailData[0].subject_id:formData.select2;
        let exam_id = formData.select1===AllClass.DetailData[0].exam_name?AllClass.DetailData[0].exam_id:formData.select1;
        let questions_answer = formData.ques2;
        let title = formData.username;
        
        AllClass.xiugai(questions_id,questions_type_id, questions_stem, subject_id, exam_id, questions_answer, title)
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
                // form={form}
                hideRequiredMark={true}
                layout="horizontal"
                initialValues={{
                    username:AllClass.DetailData[0].title,
                    ques:AllClass.DetailData[0].questions_stem,
                    select1:AllClass.DetailData[0].exam_name,
                    select2:AllClass.DetailData[0].subject_text,
                    select3:AllClass.DetailData[0].questions_type_text,
                    ques2:AllClass.DetailData[0].questions_answer,
                }}
            >
                <Form.Item style={{ height: 10 }}>
                    <h3 className="ant-form-text">题目信息</h3>
                </Form.Item>
                <Form.Item style={{ height: 10 }}>
                    <p>题干</p>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    colon={false}
                >
                    <Input placeholder="请输入题目标题,不超过20个字" style={{ width: 350 }} />
                </Form.Item>

                <Form.Item style={{ height: 10 }}>
                    <p>题目主题</p>
                </Form.Item>
                <Form.Item name='ques'>
                    <Editor style={{ height: 500, width: 1000 }} />
                </Form.Item>
                <p>请选择考试类型:</p>
                <Form.Item
                    name="select1"

                >
                    <Select style={{ width: 200 }}>
                        {
                            AllClass.AllexamType && AllClass.AllexamType.map((item: any, index) => {
                                return (
                                    <Option value={item.exam_id} key={index}>{item.exam_name}</Option>
                                )

                            })
                        }


                    </Select>
                </Form.Item>

                <Form.Item style={{ height: 10 }}>
                    <p>请选择考试类型</p>
                </Form.Item>
                <Form.Item
                    name="select2"

                >
                    <Select style={{ width: 200 }}>
                        {
                            AllClass.AllClass && AllClass.AllClass.map((item: any, index) => {
                                return (
                                    <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                )

                            })
                        }
                    </Select>
                </Form.Item>


                <Form.Item style={{ height: 10 }}>
                    <p>请选择题目类型:</p>
                </Form.Item>
                <Form.Item
                    name="select3"

                >
                    <Select style={{ width: 200 }}>
                        {
                            AllClass.Typedata && AllClass.Typedata.map((item: any, index) => {
                                return (
                                    <Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>
                                )

                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item style={{ height: 10 }}>
                    <p>答案信息</p>
                </Form.Item>
                <Form.Item name='ques2'>
                    <Editor style={{ height: 300, width: 1000 }} />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 0 }} >
                    <Button type="primary" htmlType="submit" style={{ height: 40, width: 100 }}>
                        提交
                    </Button>

                    <Modal
                        visible={visible}
                        onOk={onFinish}
                        onCancel={handleCancel}
                        cancelText="取消"
                        okText="确定"
                        footer={[
                            // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
                            <Button key="back" onClick={handleCancel} style={{ marginLeft: -180 }}>取消</Button>,
                            <Button key="submit" type="primary" onClick={showModal} size='large' style={{ marginRight: 180 }}>
                                确定
                        </Button>]}
                    >
                        <div style={{ textAlign: "center" }}>
                            <ExclamationCircleOutlined />
                            <p>你确认添加这道试题吗?</p>
                            <p>真的要添加吗?</p>
                        </div>

                    </Modal>

                </Form.Item>



            </Form>



        </div>
    )
}
