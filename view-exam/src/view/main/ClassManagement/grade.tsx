
import React,{useState,useEffect}from 'react'
import { Table, Button ,Modal} from 'antd';
import useStore from '../../../context/useStore'
import {useObserver} from 'mobx-react-lite'
import style from './grade.module.scss'
import Mask from '../../../components/mask/Mask'

const columns = [
  { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
  { title: '课程名', dataIndex: 'subject_text', key: 'subject_text' },
  { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => <a>修改</a>,
  },
  {
    title: '',
    dataIndex: '',
    key: 'del',
    render: () => <a>删除</a>,
  }
];


   
export default function Grade() {
    let [visible,setVisible]=useState();

    const {Class}=useStore();

  const  showModal = () => {
    setVisible(true)
      };
    
   const   handleOk = () => {
    setVisible(false)
      };
    
    const  handleCancel = () => {
        setVisible(false)
      };

     useEffect(() => {
        Class.getClassmanage();
    }, [])

    return useObserver(()=> <div className={style.grade}>
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
        >
          <Mask />
        </Modal>
      </>
            
        </div>)
}
