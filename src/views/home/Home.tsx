import React from 'react'
import { Layout } from 'antd'
import NavLeft from '@/components/navLeft/NavLeft'
import NavHeader from '@/components/navHeader/NavHeader'
import NavRight from '@/components/navRight/NavRight'
import NavMain from '@/components/navMain/NavMain'

const { Header, Sider, Content } = Layout

const Home = () => {
  return (
    <Layout>
      <Sider
        style={{ background: '#fff', borderRight: '1px solid #eee' }}
        width={300}
      >
        <NavLeft />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <NavHeader />
        </Header>
        <Content style={{ padding: 20 }}>
          <NavMain />
        </Content>
      </Layout>
      <Sider
        style={{ background: '#fff', borderLeft: '1px solid #eee' }}
        width={320}
      >
        <NavRight />
      </Sider>
    </Layout>
  )
}

export default Home
