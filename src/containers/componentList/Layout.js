import { HomeOutlined, SettingFilled } from '@ant-design/icons';
import componentList from '@installedComponents';
import { Button } from 'antd';
import style from './style.module.scss';

const icons = {
  HomeOutlined: <HomeOutlined/>,
  SettingFilled: <SettingFilled/>
};
const Layout = () => {
  return <ul className={style.list}>
    {componentList.map(({state}, index) => {
      return <li
        className={style.item}
        data-index={index}
        key={index}
        draggable={true}>
        <Button icon={icons[state.icon]}>{state.label}</Button>
      </li>;
    })}
  </ul>;
};

export default Layout;
