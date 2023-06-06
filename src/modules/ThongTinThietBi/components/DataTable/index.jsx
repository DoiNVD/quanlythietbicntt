import { Button, Table, Tooltip } from 'antd';
import FilterUnit from './FilterUnit';
import TypeDevice from './TypeDevice';
import { useState } from 'react';
import FormSearch from './FormSearch';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
  },
  {
    title: 'Mã thiết bị',
    dataIndex: 'ma_thiet_bi',
  },
  {
    title: 'Mã QR code',
    dataIndex: 'maqrcode',
  },
  {
    title: 'Tên Thiết Bị',
    dataIndex: 'ten_thiet_bi',
  },
  {
    title: 'Cấu Hình',
    dataIndex: 'cau_hinh',
  },
  {
    title: 'Hãng',
    dataIndex: 'hang',
  },
  {
    title: 'Loại Thiết bị',
    dataIndex: 'loai_thiet_bi',
  },
  {
    title: 'Thời gian bảo hành',
    dataIndex: 'thoi_gian_bao_hanh',
  },
  {
    title: 'số seri',
    dataIndex: 'so_seri',
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Nhà Cung Cấp',
    dataIndex: 'nha_cung_cap',
  },
  {
    title: 'Chức năng',
    key: 'operation',
    fixed: 'right',
    width: 108,
    render: () => (
      <>
        <Button shape="circle" icon={<EditOutlined />} />
        <Button shape="circle" icon={<DeleteOutlined />} />
        {/* <a>action</a>, */}
      </>
    ),
  },
];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    stt: i,
    ma_thiet_bi: `Edward King ${i}`,
    maqrcode: 32,
    ten_thiet_bi: `Thiết bị ${i}`,
    cau_hinh: 'Đại học',
    hang: 'Đại học',
    loai_thiet_bi: 'Đại học',
    thoi_gian_bao_hanh: 'Đại học',
    so_seri: '001',
    model: 'dell',
    nha_cung_cap: 'abc',
  });
}
const DataTable = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const onSelectChange = (newSelectedRowKeys) => {
  //   console.log('selectedRowKeys changed: ', newSelectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (newSelectedRowKeys) => {},
  //};

  return (
    <div className="data-table-wrapper">
      <div className="data-table-top">
        <FilterUnit />
        <TypeDevice />
        <FormSearch />
      </div>
      <div className="data-table-bottom ">
        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    </div>
  );
};

export default DataTable;
