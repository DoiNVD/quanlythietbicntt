import { Select } from 'antd';

const FilterUnit = () => {
  return (
    <div className="filter-unit d-flex align-items-center">
      <div className="filter-label mr-1">Hệ Thống:</div>
      <Select
        placeholder="chọn hệ thống"
        labelInValue
        // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
        style={{ width: 203 }}
        options={[
          {
            value: 'jack',
            label: 'Jack (100)',
          },
          {
            value: 'lucy',
            label: 'Lucy (101)',
          },
        ]}
      />
    </div>
  );
};
export default FilterUnit;
