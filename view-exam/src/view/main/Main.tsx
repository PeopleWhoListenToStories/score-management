import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import Roterview from '../../router/RouterView';
import useStore from '../../context/useStore';


// 引入组件
import MenuSider from '../../components/MenuSide/MenuSider';
import HeaderBar from '../../components/HeaderBar/Header';
import TagBar from '../../components/TagBar/TagBar';

// 引入antd
import { Layout } from 'antd';

// 引入菜单配置
import menu from '../../router/menu';

import { FormattedMessage } from 'react-intl'; /* react-intl imports */

const { Header, Sider, Content } = Layout;

// 获取右侧渲染组件名称
const getTitle = (path: string) => {
  let title = '';
  menu.forEach(item => {
    item.children.forEach((value: any) => {
      if (value.path === path) {
        title = value.meta.name;
      }
    })
  })
  return title;
}

const Main: React.FC = (props: any) => {
  const history = useHistory();
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
          <TagBar />
          {/* <h2>{props.routes.find((v: any) => v.path == props.location.pathname)?.meta?.name}</h2> */}
         
          <h2 style={{ padding: '20px' }}>
            {getTitle(history.location.pathname)}
            {/* <FormattedMessage id={getTitle(history.location.pathname)} defaultMessage={getTitle(history.location.pathname)}/> */}
          </h2>
          <Roterview routes={props.routes} />
        </Content>
      </Layout>
    </Layout>
  </MainWrapper>)
}
export default Main;

const MainWrapper = styled.div`
  wdith:100%;
  height:100%;
  h2 {
    padding:20px ;
  }
`