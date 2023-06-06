import {
  AppstoreOutlined,
  AuditOutlined,
  BarsOutlined,
  HomeOutlined,
  InfoOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuConst = [
  {
    label: <Link to="/">Trang chủ</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Quản lí thiết bị',
    key: 'quan_li_thiet_bi',
    icon: <AppstoreOutlined />,
    children: [
      {
        label: <Link to="/danhmuc">Danh mục</Link>,
        key: 'danh_muc',
        icon: <BarsOutlined />,
      },
      {
        label: <Link to="/CBNN">CBNV</Link>,
        key: 'cbnv',
        icon: <AuditOutlined />,
      },
      {
        label: <Link to="/thongtinthietbi">Thông tin thiết bị</Link>,
        key: 'thong_tin_thiet_bi',
        icon: <InfoOutlined />,
      },
    ],
  },
];

export default MenuConst;
