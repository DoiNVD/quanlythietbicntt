import Account from './Account';
import './style.css';
const AppHeader = (props) => {
  return (
    <div className={props.className}>
      <div className="wrapper-header">
        <div className="header-title">QUẢN LÝ THIẾT BỊ CÔNG NGHỆ THÔNG TIN </div>
        <Account />
      </div>
    </div>
  );
};

export default AppHeader;
