import React from 'react';
import styled from 'styled-components'
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

export default function Main() {
  return <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>Header</Header>
      <Layout>
        <Sider >Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </div>
}

const MainWrapper = styled.div` 
  width: 100%;
  height: 100%;
`