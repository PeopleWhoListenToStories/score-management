import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Input, Form } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import './room.scss'


export default function Grade() {
    const { Room } = useStore();

    // const [flag, UseFlag] = useState<boolean>(Room.visible)

    useEffect(() => {
        Room.getRoommanage();
    })


    const columns = [
        { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
        {
            title: '操作',
            key: 'action',
            render: (text: number, record: any) => {
                return <span>
                    {
                        <button className='btn' onClick={() => {
                            // Room.Del(record.room_id)
                        }}>删除</button>
                    }
                </span>
            }
        },
    ];

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };


    return useObserver(() =>
        <div>
            <Button type="primary" onClick={() => { Room.visible = true }}> 添加教室  </Button>
            <Modal
                title="添加教室"
                visible={Room.visible}
                footer={null}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(e) => {
                        Room.onFinish(e)
                    }}

                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">  添加 </Button>
                    </Form.Item>
                </Form>
            </Modal>
            {/* <Table
                columns={columns}
                dataSource={Room.roomlist}
            /> */}
        </div>)
}



