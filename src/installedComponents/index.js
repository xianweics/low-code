export const commonAttr = {
  // animations: [],
  // events: {},
  // groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  // isLock: false // 是否锁定组件
};

const list = [
  {
    component: 'Button',
    state: {
      label: '按钮',
      icon: 'HomeOutlined',
    },
    props: {
      label: '按钮'
    },
    style: {}
  },
  {
    component: 'Checkbox',
    state: {
      label: 'Checkbox',
      icon: 'SettingFilled',
    },
    props: {
      label: 'Checkbox',
      value: true
    },
    style: {}
  }
];

for (let i = 0, len = list.length; i < len; i++) {
  const item = list[i];
  list[i] = { ...commonAttr, ...item };
}

export default list;
