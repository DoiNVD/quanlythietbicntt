import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const CreateNew = () => {
  return (
    <Button type="primary" className="tool-item" icon={<PlusOutlined />}>
      Thêm Mới
    </Button>
  );
};

export default CreateNew;
