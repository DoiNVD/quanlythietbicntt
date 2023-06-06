import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Import = () => {
  return (
    <Button type="primary" className="tool-item" icon={<PlusOutlined />}>
      Import dữ liệu
    </Button>
  );
};

export default Import;
