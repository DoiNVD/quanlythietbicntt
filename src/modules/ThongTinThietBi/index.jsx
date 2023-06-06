import CreateNew from './components/CreateNew';
import DataTaBle from './components/DataTable';
import HandOver from './components/HandOver';
import Import from './components/Import';
import Title from './components/Title';
import './device-information.css';

const ThongTinThietBi = () => {
  return (
    <div className="device-information-wrapper">
      <div className="wrapper-top">
        <Title />
        <div className="tools-wrapper">
          <Import />
          <CreateNew />
          <HandOver />
        </div>
      </div>
      <div className="wrapper-bottom">
        <DataTaBle />
      </div>
    </div>
  );
};

export default ThongTinThietBi;
