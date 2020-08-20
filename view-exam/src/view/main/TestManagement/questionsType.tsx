
// 添加类型
import React, { useState, useEffect } from 'react'
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'

import style from './question.module.css'
//按钮
import { Button ,Modal} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//表格
import { Table, Space } from 'antd';

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
  let { AllClass } = useStore()
  useEffect(() => {
    AllClass.getClassData()
    // data=Addtypes.Typedata
  }, [AllClass])


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

      <Table columns={columns} dataSource={AllClass.Typedata} rowKey={(record) => record.questions_type_id}/>

      <Modal
        visible={visibled}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        cancelText="取消"
        okText="确定"
        footer={[
          // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
          <Button key="submit" type="primary" onClick={handleOk} style={{marginLeft:-180}} size='large'>确定</Button>,
          <Button   key="back"  onClick={handleCancel}   style={{marginRight:180}}>
          取消
          </Button>]}
      >
        <h3 style={{textAlign:"center"}}>创建新类型</h3>
        <Input placeholder="请输入类型名称" bordered={false} />
      </Modal>

    </div>
  )
}

export default QuestionsType
