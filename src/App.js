import { RouterProvider } from 'react-router-dom';
import RouterConst from './shared/constants/RoutesConst';
import './styles/reset.css';
import 'antd/dist/reset.css';
import './styles/global.css';

const App = () => {
  return <RouterProvider router={RouterConst} />;
};

export default App;
