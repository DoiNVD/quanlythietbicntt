import { Select } from 'antd';

const FilterUnit = () => {
  return (
    <div className="filter-unit d-flex align-items-center">
      <div className="">Đơn vị</div>
      <Select
        labelInValue
        defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
        style={{ width: 120 }}
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
