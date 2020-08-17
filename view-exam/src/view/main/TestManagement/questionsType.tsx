
// 添加类型
import React, { useState, useEffect } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'

import style from './question.module.css'
//按钮
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//表格
import { Table, Space } from 'antd';
//对话框
import { Modal, } from 'antd';
//输入框
import { Input } from 'antd';

const columns = [
  {
    title: '类型ID',
    dataIndex: 'questions_type_id',
    key: 'questions_type_id',
  },
  {
    title: '类型名称',
    dataIndex: 'questions_type_text',
    key: 'questions_type_text',
  },

  {
    title: '操作',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <span>修改</span>
        <span>删除</span>
      </Space>
    ),
  },
];


function QuestionsType() {
  let [visibled, setVisible] = useState<any>()
  //使用仓库
  let {Addtypes}=useStore()
  useEffect(()=>{
    Addtypes.getTypeData()
    // data=Addtypes.Typedata
},[])


  const showModal = () => {
    setVisible(true)
  };

  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false)

  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false)
  };
  return useObserver(() =>
    <div className={style.question}>

      <Button type="primary" icon={<PlusOutlined />} size="middle" onClick={showModal}>
        添加类型
        </Button>

      <Table columns={columns} dataSource={Addtypes.Typedata} />
        <Modal
          title="创建新类型"
          visible={visibled}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText="取消"
          okText="确定"
          centered={true}
        >
         <Input placeholder="请输入类型名称" bordered={false}  />
        </Modal>
      
    </div>
  )
}

export default QuestionsType
