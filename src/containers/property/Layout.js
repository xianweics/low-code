import { Menu } from 'antd';
import { useCallback, useMemo, useState } from "react";

const Layout = props => {
  const { className } = props;
  const [tab, setTab] = useState('property');
  const changeTab = useCallback(e => {
    setTab(e.key);
  }, []);
  const list = useMemo(() => [
    {
      key: 'property',
      value: '属性'
    },
    {
      key: 'event',
      value: '事件'
    }
  ], []);
  return <Menu
    mode="horizontal"
    onClick={changeTab}
    selectedKeys={[tab]}
    className={className}>
    {
      list.map(({ key, value }) => <Menu.Item key={key}>
        {value}
      </Menu.Item>)
    }
  
  </Menu>;
};

export default Layout;
