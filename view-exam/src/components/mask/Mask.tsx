import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import style from './mask.module.scss'

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

    export default function Mask() {
        
    const onFinish = (values: any) => {
                    console.log('Success:123', values);
                    
                };
            
        return (
                <div className={style.maskBox}>
                <Form  {...layout}
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
                        label="课程名"
                        name="subject_text"
                        rules={[
                            {
                                required: true,
                                message: '请输入课程名!',
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
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                    </Button>
                    </Form.Item>
                </Form>
            </div>
            
        )
    }
