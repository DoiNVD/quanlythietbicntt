import '../style.css';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import MenuConst from '../../../shared/constants/MenuConst';
import logo from '../../../public/images/logo.jpg';

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className="sidebar-logo">
        <div onClick={toggleCollapsed} className="navigation-logo">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        {/* Ẩn thẻ h1 khi collapsed là true */}
        {!collapsed ? (
          <div className="logo-home">
            <img src={logo} alt="" />
          </div>
        ) : null}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={MenuConst}
        className="sidebar-menu"
      />
    </>
  );
};

export default Navigation;
