import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { Layout, Breadcrumb, Form, Input, InputNumber, DatePicker, Button, Select } from 'antd';
import useStore from '../../../context/useStore'
const { Content } = Layout;

export default function () {
    const history = useHistory();
    let { ExamManagement } = useStore()
    useEffect(() => {
        ExamManagement.getExamTypedata();
        ExamManagement.getAllcourses();
    })
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    const validateMessages = {
        required: `${'label'} is required!`,
        types: {
            email: `${'label'}`,
            number: `${'label'} is not a validate number!`,
        },
        number: {
            range: `${'label'} must be between ${'min'} and ${'max'}`,
        },
    };
    async function onFinish(values: any) {
        await ExamManagement.addCreateExam(values.user)//创建
        history.push('/main/edits')
    };
    const { RangePicker } = DatePicker;
    const rangeConfig = {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
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
                        <Form.Item name={['user', 'title']} label="试卷名称" rules={
                            [{ required: true, pattern: /^[a-z]{4,16}$/, message: '用户名只能写小写字母4-16位' }]
                        }>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'exam_id']} label="选择考试类型" rules={[{ required: true }]}>
                            <Select >
                                {
                                    ExamManagement.ExamTypedata.map((item: any, index: any) => {
                                        return (
                                            <Select.Option value={item.exam_id} key={index}>{item.exam_name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name={['user', 'subject_id']} label="选择课程" rules={[{ required: true }]}>
                            <Select>
                                {
                                    ExamManagement.Allcoursesdata.map((item: any, index: any) => {
                                        return (
                                            <Select.Option value={item.subject_id} key={index}>{item.subject_text}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item name={['user', 'number']} label="设置题量" rules={[{ required: true }]}>
                            <InputNumber min={3} max={10} />
                        </Form.Item>
                        <Form.Item name={['user', 'time']} label="设置时间" {...rangeConfig} rules={[{ required: true }]} >
                            <RangePicker />
                        </Form.Item >
                        <Form.Item
                            wrapperCol={{
                                xs: { span: 24, offset: 0 },
                                sm: { span: 16, offset: 8 },
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                创建试卷
    </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div>
    )
}