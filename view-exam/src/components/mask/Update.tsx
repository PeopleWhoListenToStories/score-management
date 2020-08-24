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
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 15,
    },
};
 
export default function Mask() {

    let { Class} = useStore();

    const onFinish = (values: any) => {
        console.log('Success:123', values);
        Class.updateC(values)
        Class.flag=false
    };

    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }


    return useObserver(()=> <div className={style.maskBox}>
            <Form  {...layout}
                name="basic"
                initialValues={{
                    status: '',
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="班级名"
                    name="grade_name"
                   
                >
                     <Input value={Class.con.grade_name} placeholder={Class.con.grade_name}  />
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
                    <Select 
                    // placeholder='12306'
                    placeholder={Class.con.room_text}
                    style={{ width: 180 }} onChange={handleChange}>
                        {
                           Class.classlist.map((item: any,index) => {
                                return <Option key={index} value={item.room_id}>{item.room_text}</Option>
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
                    <Select
                     placeholder={Class.con.subject_text}
                    //  placeholder='node基础'
                     style={{ width: 180 }} onChange={handleChange}>
                        {
                            Class.classlist.map((item: any,index) => {
                                return <Option key={index} value={item.subject_id}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        修改
                    </Button>
                </Form.Item>
                
            </Form>
        </div>) 
}


