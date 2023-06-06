import { Input } from 'antd';

const { Search } = Input;

const FormSearch = () => {
  return (
    <div className="search-table d-flex align-items-center mr-1">
      <div className="search-label mr-1">Tìm kiếm:</div>
      <Search placeholder="input search text" enterButton />
    </div>
  );
};
export default FormSearch;
