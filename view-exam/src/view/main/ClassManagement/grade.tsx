import React, {   useEffect } from 'react'
import { Table, Button, Modal, Popconfirm, message } from 'antd';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import style from './grade.module.scss'
import Mask from '../../../components/mask/Mask'
import UpDate from '../../../components/mask/Update'

export default function Grade() {
  // let [visible, setVisible] = useState<boolean>();
  // let [flag, setFlag] = useState<boolean>();

  const { Class } = useStore();

  function confirm(val: any) {
    message.success('删除成功');
    Class.delList(val.grade_id);
  }

  function cancel(e: any) {
    console.log(e);
  }

  const showModal = () => {
    Class.visible = true
  };

  const handleOk = () => {
    Class.visible = false
  };

  const handleCancel = () => {
    Class.visible = false
  };

  const showFlag = (val: any) => {
    Class.upd(val)
    Class.flag = true
    // setFlag(true)
  };

  const FlagOk = () => {
    Class.flag = true
    // setFlag(false)
  };

  const FlagCancel = () => {
    Class.flag = true
    // setFlag(false)
  };
  useEffect(() => {
    Class.getClassmanage();
  }, [Class])

  const columns = [
    { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
    { title: '课程名', dataIndex: 'subject_text', key: 'subject_text' },
    { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
    {
      title: '操作1',
      key: 'action',
      render: (text: number, record: any) => {
        return <span>
          {
            <button className='btn' onClick={() => {
              showFlag(record)
            }}>修改</button>
          }
        </span>
      }
    },
    {
      title: '操作2',
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
              <span   >删除</span>
            </Popconfirm>
          }
        </span>
      }
    }
  ];

  return useObserver(() => <div className={style.grade}>
    <Button
      className={style.addBtn}
      style={{
        background: 'linear-gradient(45deg, #063DFD,#5395F7)',
        borderRadius: '3px',
        padding: '0px 30px',
        height: '40px'
      }}
      onClick={showModal}> + 添加班级 </Button>
    <div className={style.inner}>
      <Table
        columns={columns}
        dataSource={Class.classlist}
        rowKey={(r) => r.grade_id}
      />
    </div>
    <>
      <Modal
        title="Basic Modal"
        visible={Class.visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Mask />
      </Modal>
    </>

    <>
      <Modal
        title="Basic Modal"
        visible={Class.flag}
        onOk={FlagOk}
        onCancel={FlagCancel}
        footer={null}
      >
        <UpDate />
      </Modal>
    </>

  </div>)
}
