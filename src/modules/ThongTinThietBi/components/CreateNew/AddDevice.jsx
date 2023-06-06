import { Select } from 'antd';

const TypeDevice = () => {
  return (
    <div className="type-device d-flex align-items-center ">
      <div className="type-label mr-1">Loại thiết bị:</div>
      <Select placeholder="chọn loại thiết bị" labelInValue style={{ width: 203 }} />
    </div>
  );
};
export default TypeDevice;
