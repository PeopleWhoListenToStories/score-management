import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import Roterview from '../../router/RouterView';
import useStore from '../../context/useStore';

// 引入组件
import MenuSider from '../../components/MenuSide/MenuSider';
import HeaderBar from '../../components/HeaderBar/Header';

// 引入antd
import { Layout } from 'antd';

// 引入菜单配置
import menu from '../../router/menu';

const { Header, Sider, Content } = Layout;

// 获取右侧渲染组件名称
const getTitle = (path: string) => {
  let title = '';
  menu.forEach(item => {
    item.children.forEach((value: any) => {
      if (value.path === path) {
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

  return useObserver(() => <MainWrapper className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>
        <HeaderBar />
      </Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
        <Content>
          {/* <h2>{props.routes.find((v: any) => v.path == props.location.pathname)?.meta?.name}</h2> */}
          <h2 style={{padding:'20px'}}>{getTitle(history.location.pathname) ? getTitle(history.location.pathname) : '默认参数'}</h2>
          <Roterview routes={props.routes} />
        </Content>
      </Layout>
    </Layout>
  </MainWrapper>)
}

const MainWrapper = styled.div`
  wdith:100%;
  height:100%;
  h2 {
    padding:20px ;
  }
`