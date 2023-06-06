import './navigation.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import MenuConst from '../../../shared/constants/MenuConst';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="navigation-wrapper">
        <div onClick={toggleCollapsed} className="navigation-logo">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        {!collapsed ? <div>THACO INDUSTRIES</div> : null}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={MenuConst}
      />
    </div>
  );
};

export default Navigation;
