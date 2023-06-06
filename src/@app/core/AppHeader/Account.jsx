import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Thông tin tài khoản
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Đăng xuất
      </a>
    ),
    // icon: <SmileOutlined />,
    // disabled: true,
  },
];
const Account = () => {
  return (
    <div className="header-account">
      <Avatar size="large" icon={<UserOutlined />} />
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <div className="userName">DoiNguyen</div>
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default Account;
