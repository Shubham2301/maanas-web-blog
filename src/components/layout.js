import React from 'react';
import { Layout, Menu } from 'antd';
import routes from '../configs/routes.json';
import { Link } from "gatsby"

const { Header, Content, Footer } = Layout;

function CustomLayout({children}) {

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          // style={{ lineHeight: '64px' }}
        >
          {routes.map((v, i) => {
            return (
              <Menu.Item
                key={v.name}
              >
                <Link to={v.path}>
                  {v.name}
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer className='main-footer' style={{ textAlign: 'center' }}>
        <p>Ant Design ©2018 Created by Ant UED</p>
      </Footer>
    </Layout>
  )
}

export default CustomLayout;