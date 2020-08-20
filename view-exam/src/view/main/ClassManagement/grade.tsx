import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './grade.module.scss'
import Mask from '../../../components/mask/Mask'

export default function Grade() {
  let [visible, setVisible] = useState<boolean>();

  const { Class } = useStore();
  const columns = [
    { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
    { title: '课程名', dataIndex: 'subject_text', key: 'subject_text' },
    { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
    //   {
    //     title: '操作',
    //     key: 'action',
    //     render: (text: number, record: any) => {
    //         return <span>
    //             {
    //                 <button className='btn' onClick={() => {
    //                      Room.Del(record.room_id) 
    //                 }}>修改</button>
    //             }
    //         </span>
    //     }
    // },
    {
      title: '操作',
      key: 'action',
      render: (text: number, record: any) => {
        return <span>
          {
            <button className='btn' onClick={() => {
              Class.delList()
            }}>删除</button>
          }
        </span>
      }
    },
  ];


  const showModal = () => {
    setVisible(true)
  };

  const handleOk = () => {
    setVisible(false)
  };

  const handleCancel = () => {
    setVisible(false)
  };

  useEffect(() => {
    Class.getClassmanage();
  }, [])

  return useObserver(() => <div className={style.grade}>
    <Button className={style.addBtn} onClick={showModal}> + 添加班级 </Button>
    <Table
      columns={columns}
      dataSource={Class.classlist}
      rowKey={(record:any) => record.grade_id}
    />
    <>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Mask />
      </Modal>
    </>

  </div>)
}
