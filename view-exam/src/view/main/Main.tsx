import React from 'react';
import {useHistory} from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import Roterview from '../../router/RouterView'
import useStore from '../../context/useStore';

// 引入组件
import MenuSider from '../../components/MenuSide1/MenuSider';
import HeaderBar from '../../components/HeaderBar/Header'

// 引入antd
import { Layout } from 'antd';

// 引入菜单配置
import menu from '../../router/menu'
const { Header, Sider, Content } = Layout;

// 获取右侧渲染组件名称
const getTitle = (path:string) => {
  let title='';
  menu.forEach(item=>{
    item.children.forEach(value=>{
      if(value.path === path){
        title = value.meta.title;
      }
    })
  })
  return title;
}

export default function Main(props: any) {
  const history = useHistory();
  // console.log(history.location.pathname)
  const { MainStore } = useStore();

  MainStore.initAction();

  return useObserver(() => <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>
        <HeaderBar />
      </Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
        <Content>
          <h3>{getTitle(history.location.pathname) ? getTitle(history.location.pathname) : '欢迎光临'}</h3>
          <Roterview routes={props.routes} />
        </Content>
      </Layout>
    </Layout>
  </div>)
}
