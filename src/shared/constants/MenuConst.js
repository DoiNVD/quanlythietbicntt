import {
  ApartmentOutlined,
  AppstoreOutlined,
  AuditOutlined,
  BarsOutlined,
  HomeOutlined,
  InfoOutlined,
  LineChartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
  UsergroupAddOutlined,
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
        label: <Link to="/danh-muc">Danh mục</Link>,
        key: 'danh_muc',
        icon: <BarsOutlined />,
      },
      {
        label: <Link to="/can-bo-nhan-vien">CBNV</Link>,
        key: 'can_bo_nhan_vien',
        icon: <AuditOutlined />,
      },
      {
        label: <Link to="/thiet-bi">Thông tin thiết bị</Link>,
        key: 'thiet_bi',
        icon: <InfoOutlined />,
      },
      {
        label: <Link to="/kho">Kho</Link>,
        key: 'kho',
        icon: <ApartmentOutlined />,
      },
      {
        label: <Link to="/baocao">Báo cáo</Link>,
        key: 'bao_cao',
        icon: <LineChartOutlined />,
      },
    ],
  },
  {
    label: <Link to="/">Bảo trì thiết bị</Link>,
    key: 'bao_tri_thiet_bi',
    icon: <ToolOutlined />,
  },
  {
    label: <Link to="/">Hỗ trợ người dùng</Link>,
    key: 'ho_tro_nguoi_dung',
    icon: <UsergroupAddOutlined />,
  },
  {
    label: <Link to="/">Quản lý thu mua</Link>,
    key: 'quan_ly_thu_nua',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: <Link to="/">Hệ Thống</Link>,
    key: 'he_thong',
    icon: <SettingOutlined />,
  },
];

export default MenuConst;
