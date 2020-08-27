import React,{useState} from 'react'
import { Modal, Form ,Select, Button ,Input , Upload ,Avatar } from 'antd';
import { useObserver } from 'mobx-react-lite'
import useStore from '../../context/useStore'
import { PlusOutlined } from '@ant-design/icons';


export default function Header() {
  const [visible,setVisible]=useState(false);
  const { Option } = Select;


  function handleChange(value:any) {
    console.log(`selected ${value}`);
  }
 function showModal ()  {
    setVisible(true)
  };

  return useObserver(() => (
      <Modal
          title="Basic Modal"
          visible={visible}
          onCancel={()=>setVisible(false)}
          footer={null}
        >
        <Form>
          <Form.Item label='用户头像' name='avatar'>
          <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          // fileList={fileList}
          // onPreview={this.handlePreview}
          // onChange={this.handleChange}
        >
           <Avatar size={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Upload>
          </Form.Item>

          <Form.Item label='用户昵称' name='user_name'>
              <Input placeholder='请输入宁的用户昵称'/>
          </Form.Item>

          <Form.Item label='用户ID' name='user_id'>
              <Input placeholder='请输入宁的用户ID'/>
          </Form.Item>

          <Form.Item label='用户身份' name='identity_id'>
            <Select defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Jack</Option>
            </Select>
          </Form.Item>

          <Form.Item>
              <Button htmlType='submit'>确定</Button>
              <Button>取消</Button>
          </Form.Item>

        </Form>
        </Modal>)
  )
}

