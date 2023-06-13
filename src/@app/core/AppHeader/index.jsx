import Account from './Account';
import '../style.css';
const AppHeader = (props) => {
  return (
    <div className={props.className}>
      <div className="header-title">QUẢN LÝ THIẾT BỊ CÔNG NGHỆ THÔNG TIN </div>
      <Account />
    </div>
  );
};

export default AppHeader;
