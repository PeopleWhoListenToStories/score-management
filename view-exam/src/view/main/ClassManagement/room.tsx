import React, { useEffect, useState } from 'react'
import { Table, Button, Modal, Input, Form, Popconfirm, message } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './room.module.scss'
import './room.module.scss'


export default function Grade() {
    const { Room } = useStore();
    let [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        Room.getRoommanage();
    },[Room])


    function confirm(val: any) {
        setVisible(false)
        message.success('删除成功');
        Room.Del(val.room_id);
        console.log(visible)
        
    }

    function cancel(e: any) {
        console.log(e);
    }
    const columns = [
        { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
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
                            <span>删除</span>
                        </Popconfirm>
                    }
                </span>
            }
        }
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
    const showModal = () => {
        
        setVisible(true)
        console.log(visible)
      };
    
      const handleOk = () => {
        setVisible(false)
      };
    
      const handleCancel = () => {
        setVisible(false)
      };
    const finish=(e:any)=>{
        setVisible(false)
        Room.onFinish(e)
    }


    return useObserver(() =>
        <div className={style.roomBox}>
            <Button type="primary" className={style.btn} onClick={showModal}> 添加教室  </Button>
            <Modal
                title="添加教室"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(e) => {
                        finish(e)
                       
                    }}

                >
                    <Form.Item
                        label="教室号"
                        name="username"
                        rules={
                            [{ required: true, pattern: /^[0-9]{5}$/, message: '输入教室号'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">添加</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table
                rowKey={(r) => r.room_text}
                columns={columns}
                dataSource={Room.roomlist}
            >
            </Table >
        </div>)

}



