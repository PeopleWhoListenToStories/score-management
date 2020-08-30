import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';
import RouterView from '../../router/RouterView';
import useStore from '../../context/useStore';

// 引入组件
import MenuSider from '../../components/MenuSide/MenuSider';
import HeaderBar from '../../components/HeaderBar/Header';
import TagBar from '../../components/TagBar/TagBar';
import AfterSale from '../../components/afterSale/AfterSale'


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
      } else {
        title = ' '
      }
    })
  })
  return title;
}

const Main: React.FC = (props: any) => {
  const history = useHistory();
  const { MainStore } = useStore();

  return useObserver(() => <MainWrapper className="Main"  >
    {/* 售后聊天框 */}
    {MainStore.AfterSaleVisable ? <AfterSale /> : ''}
    <Layout style={{ overflow: 'hidden' }}>
      <Header style={{ background: '#fff' }}>
        <HeaderBar />
      </Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
        <Content>
          <TagBar />
          {/* <h2>{props.routes.find((v: any) => v.path == props.location.pathname)?.meta?.name}</h2> */}

          <h2 style={{ padding: '20px' }}>
            < FormattedMessage
              id={getTitle(history.location.pathname)}
              defaultMessage={getTitle(history.location.pathname)} />
            {/* <FormattedMessage id={getTitle(history.location.pathname)} defaultMessage={getTitle(history.location.pathname)}/> */}
          </h2>
          <RouterView routes={props.routes && props.routes} />
        </Content>
      </Layout>
    </Layout>
  </MainWrapper >)
}
// export default injectIntl(Main);
export default Main;

const MainWrapper = styled.div`
  wdith:100%;
  height:100%;
  h2 {
    padding:20px ;
  }
`