import React from 'react'
import './header.scss'
import { Menu, Dropdown, Avatar } from 'antd';
import { useHistory, Link } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../context/useStore'
import { removeCookie } from "../../utils/myCookie"
import { Radio } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import krEa from 'antd/es/locale/ko_KR';

import { createFromIconfontCN, HeartTwoTone } from '@ant-design/icons';
import Music from '../Music/music'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});



export default function Header() {
  const history = useHistory();
  const { MainStore, Language } = useStore();

  function changeLocale(e: any) {
    const localeValue = e.target.value;
    Language.changeLanguage(localeValue)
  };
  function onClick(e: any) {
    if (e.key === '4') {//退出 
      window.sessionStorage.removeItem('token');
      removeCookie('user_id');
      history.push('/Login')
    } else if (e.key === '5') {
      MainStore.changeAfterSaleVisable(true)
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1"><Link to='/show'>个人中心</Link></Menu.Item>
      <Menu.Item key="2">我的班级</Menu.Item>
      <Menu.Item key="3"><Link to="/setup">设置</Link></Menu.Item>
      <Menu.Item key="5">联系售后{MainStore.messageFlag && <HeartTwoTone twoToneColor="#eb2f96" style={{ marginLeft: 30 }} />}</Menu.Item>
      <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
  );
  return useObserver(() => (
    <div className='headerbox'>
      <p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      </p>
      <div style={{ display: 'flex' }}>
        <Dropdown overlay={menu} arrow >
          <a className="ant-dropdown-link" href="1" onClick={e => e.preventDefault()}>
            <Avatar src={(MainStore.user_info as any).avatar ? (MainStore.user_info as any).avatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
            {(MainStore.user_info as any).user_name} · {(MainStore.user_info as any).identity_text}
            {MainStore.messageFlag && <HeartTwoTone twoToneColor="#eb2f96" style={{ marginTop: -15 }} />}
          </a>
        </Dropdown>
        <div className="change-locale" style={{ marginLeft: 20 }} >
          <Radio.Group value={Language.locale} onChange={changeLocale}>
            <Radio.Button key="en" value={'en'}> English </Radio.Button>
            <Radio.Button key="zh" value={'zh'}>  中文  </Radio.Button>
            <Radio.Button key="kr" value={'kr'}>  한국어  </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <Music />
    </div>)
  )
}