<<<<<<< HEAD

=======
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './grade.module.scss'
import Mask from '../../../components/mask/Mask'

<<<<<<< HEAD
import Update from '../../../components/mask/Update'


export default function Grade() {
  let [visible, setVisible] = useState();
  let [flag, setFlag] = useState();

=======
export default function Grade() {
  let [visible, setVisible] = useState<boolean>();
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b

  const { Class } = useStore();
  const columns = [
    { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
    { title: '课程名', dataIndex: 'subject_text', key: 'subject_text' },
    { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
<<<<<<< HEAD
    {
      title: '操作',
      key: 'action',
      render: (text: number, record: any) => {
        return <span>
          {
            <button className='btn' onClick={()=>{
              showFlag(record)
            }}>修改</button>
          }
        </span>
      }
    },
=======
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
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
    {
      title: '操作',
      key: 'action',
      render: (text: number, record: any) => {
        return <span>
          {
            <button className='btn' onClick={() => {
<<<<<<< HEAD
              Class.delList(record.grade_id)
=======
              Class.delList()
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
            }}>删除</button>
          }
        </span>
      }
    },
  ];
<<<<<<< HEAD


=======


>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
  const showModal = () => {
    setVisible(true)
  };

  const handleOk = () => {
<<<<<<< HEAD
    setVisible(false)
  };

  const handleCancel = () => {
    setVisible(false)
  };
  const showFlag = (val:any) => {
    Class.upd(val)
    setFlag(true)
  };

  const FlagOk = () => {
    setFlag(false)
  };

  const FlagCancel = () => {
    setFlag(false)
  };

=======
    setVisible(false)
  };

  const handleCancel = () => {
    setVisible(false)
  };

>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
  useEffect(() => {
    Class.getClassmanage();
  }, [])

  return useObserver(() => <div className={style.grade}>
    <Button className={style.addBtn} onClick={showModal}> + 添加班级 </Button>
    <Table
      columns={columns}
      dataSource={Class.classlist}
    />
    <>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
<<<<<<< HEAD
=======
        footer={null}
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
      >
        <Mask />
      </Modal>
    </>

<<<<<<< HEAD
    <>
      <Modal
        title="Basic Modal"
        visible={flag}
        onOk={FlagOk}
        onCancel={FlagCancel}
      >
        <Update />
      </Modal>
    </>

=======
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
  </div>)
}

