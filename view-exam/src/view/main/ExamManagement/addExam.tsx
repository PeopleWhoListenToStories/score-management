import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import { Layout, Breadcrumb, Form, Input, InputNumber, DatePicker, Button, Select } from 'antd';
import useStore from '../../../context/useStore'
const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label}',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default function () {
    let { ExamManagement } = useStore()
    useEffect(() => {
        ExamManagement.getExamTypedata()
    }, [])
    console.log(ExamManagement.getExamTypedata)

    function onFinish(values: any) {
        values.user.time.map((item: any) => {
            let time = new Date(item._d)
            // console.log(time);
            let d = new Date(time);
            // 格式转换
            let dateValue = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            console.log(dateValue);
        })
        // console.log(values);
        console.log(...values)
    };
    const { RangePicker } = DatePicker;
    const rangeConfig = {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    // function onChange(moment: any) {
    //     console.log(moment._d);
    //     // 中国区的时间格式
    //     // let time = new Date(now._d)
    //     // console.log(time);
    //     // let d = new Date(time);
    //     // // 格式转换
    //     // let dateValue = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    //     // console.log(dateValue);
    //   }
    return useObserver(() =>
        <div>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'name']} label="试卷名称" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'exam_type']} label="选择考试类型" rules={[{ required: true }]}>
                            <Select>
                                <Select.Option value="demo" >Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={['user', 'subject_text']} label="选择课程" rules={[{ required: true }]}>
                            <Select>
                                <Select.Option value="demo" >Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={['user', 'number']} label="设置题量" rules={[{ required: true }]}>
                            <InputNumber min={3} max={10} defaultValue={1} />
                        </Form.Item>
                        <Form.Item name={['user', 'time']} label="设置时间" {...rangeConfig} rules={[{ required: true }]} >
                            <RangePicker />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                xs: { span: 24, offset: 0 },
                                sm: { span: 16, offset: 8 },
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
    </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div>
    )
}