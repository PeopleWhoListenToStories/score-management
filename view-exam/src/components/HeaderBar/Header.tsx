import React,{useState, useEffect} from 'react'
import './header.scss'
import { Menu, Dropdown , Modal, Form ,Select,
   Button ,Input , Upload ,Avatar } from 'antd';
import { useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../context/useStore'
import { removeCookie } from "../../utils/myCookie"
 import { UploadOutlined } from '@ant-design/icons';
import { lang } from 'moment';
// import AddUserStore from '../../store/index'

export default function Header() {
  const history = useHistory();
  const { MainStore} =useStore ();
  const [visible,setVisible]=useState(false);
  const { Option } = Select;
  const {AddUserStore} =useStore();
  let [avatar,setAvatar]=useState<string>((MainStore.user_info as any).avatar);

  useEffect(() => {
    
  }, [])

  function onClick(e: any) {
    if (e.key === '4')//退出
    {
      window.sessionStorage.removeItem('token');
      removeCookie('user_id');
      history.push('/Login')
    }
  };

  function handleChange(value:any) {
    console.log(`selected ${value}`);
  }
 function showModal ()  {
    setVisible(true)
  };
//   const langOverlay=(
//  <Menu>
//    <Menu.Item key='0'>
//      简体中文
//    </Menu.Item>
//    <Menu.Item key='1'>
//      English
//    </Menu.Item>
//  </Menu>
//   )
   
 function onFinish(values:any){
        console.log('Success:', values);
      };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1" onClick={showModal}>个人中心</Menu.Item>
      <Menu.Item key="2">我的班级</Menu.Item>
      <Menu.Item key="3">设置</Menu.Item>
      <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
  );
      async function changeAvatar(e: any) {
        if (e.file.status === 'done') {
          let data = e.file.response.data;
          let index = data.findIndex((item: any) => item.name === 'avatar');
          setAvatar(data[index].path);
        }
      }
      const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    };
      
  return useObserver(() => (
    <div className='headerbox'>
      <p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      </p>
      <p>
        <Dropdown overlay={menu} arrow>
          <a className="ant-dropdown-link" href="1" onClick={e => e.preventDefault()}>
            <Avatar src={(MainStore.user_info as any).avatar ? (MainStore.user_info as any).avatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
            {(MainStore.user_info as any).user_name} · {(MainStore.user_info as any).identity_text}
          </a>
        </Dropdown>
      </p>


      <Modal
          title="Basic Modal"
          visible={visible}
          onCancel={()=>setVisible(false)}
          footer={null}
        >
        <Form
        onFinish={onFinish}
        >
          <Form.Item label='用户头像' name='avatar'>
           <Upload
          name="avatar"
          action="//123.206.55.50:11000/upload"
          showUploadList={false}
          onChange={changeAvatar}
        >
          <Avatar size={50} src={avatar} />
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
        </Modal>
    </div>)
  )
} 