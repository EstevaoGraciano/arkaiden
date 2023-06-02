import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;


const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div>
          Arkaiden RPG Manager
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'nav 1',
            },
            {
              key: '2',
              label: 'nav 2',
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Home;