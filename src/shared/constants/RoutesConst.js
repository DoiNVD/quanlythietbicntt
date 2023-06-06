import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import DanhMuc from '../../pages/danhmuc';
import ThongTinThietBi from '../../pages/thongtinthietbi';

const RoutesConst = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/danhmuc',
    element: <DanhMuc />,
  },
  {
    path: '/thongtinthietbi',
    element: <ThongTinThietBi />,
  },
]);

export default RoutesConst;
