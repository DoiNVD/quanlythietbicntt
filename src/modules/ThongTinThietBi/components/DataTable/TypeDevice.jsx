import { Select } from 'antd';
const TypeDevice = () => {
  return (
    <div className="type-device d-flex align-items-center ">
      <div className="type-label mr-1">Loại thiết bị:</div>
      <Select
        placeholder="chọn loại thiết bị"
        labelInValue
        // defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
        style={{ width: 203 }}
        // options={[
        //   {
        //     value: 'jack',
        //     label: 'Jack (100)',
        //   },
        //   {
        //     value: 'lucy',
        //     label: 'Lucy (101)',
        //   },
        // ]}
      />
    </div>
  );
};
export default TypeDevice;
