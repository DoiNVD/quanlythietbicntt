import FilterUnit from './FilterUnit';
import Search from './FormSearch';
import TypeDevice from './TypeDevice';

const DataTaBle = () => {
  return (
    <div className="data-table-wrapper">
      <div className="">
        <FilterUnit />
        <Search />
        <TypeDevice />
      </div>
      <div className="Table"></div>
    </div>
  );
};

export default DataTaBle;
