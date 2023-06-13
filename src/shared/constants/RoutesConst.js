import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import DanhMuc from '../../pages/danhmuc';
import Thietbi from '../../pages/thietbi';

const RoutesConst = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/danh-muc',
    element: <DanhMuc />,
  },
  {
    path: '/thiet-bi',
    element: <Thietbi />,
  },
]);

export default RoutesConst;
