import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import useStore from '../../context/useStore'
import { useObserver } from 'mobx-react-lite'

import style from './mask.module.scss'

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 13,
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 15,
    },
};


export default function Mask() {

    let { Class } = useStore();
   console.log(Class.classlist)
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    
    const onFinish = (values: any) => {
        console.log('Success:123', values);

        Class.addClassAction(values)
    };


    return useObserver(()=> <div className={style.maskBox}>
            <Form  {...layout}
                name="basic"
                initialValues={{
                    status: ''
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
                    <Select placeholder="请选择教室号" style={{ width: 180 }} onChange={handleChange}>
                        {
                            Class.classlist.map((item: any,index) => {
                                return <Option key={index} value={item.room_text}>{item.room_text}</Option>
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
                    <Select placeholder="请选择课程" style={{ width: 180 }} onChange={handleChange}>
                        {
                            Class.classlist.map((item: any,index) => {
                                return <Option key={index} value={item.subject_text}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                    </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>) 
}