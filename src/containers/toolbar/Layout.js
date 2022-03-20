import { Button, Input } from 'antd';
import { useState } from "react";
import style from './style.module.scss';

const Layout = props => {
  const {className = ''} = props;
  const undo = () => {};
  const redo = () => {};
  const preview = () => {};
  const save = () => {};
  const clear = () => {};
  const compose = () => {};
  const decompose = () => {};
  const lock = () => {};
  const unlock = () => {};
  
  const [canvasWidth, setCanvasWidth] = useState();
  const [canvasHeight, setCanvasHeight] = useState();
  const [canvasScale, setCanvasScale] = useState();
  
  const onChangeCanvasWith = e => {
    setCanvasWidth(e.target.value);
  };
  const onChangeCanvasHeight = e => {
    setCanvasHeight(e.target.value);
  };
  const onChangeCanvasScale = e => {
    setCanvasScale(e.target.value);
  };
  return <div className={`${style.toolbar} ${className}`}>
    <Button onClick={undo}>撤消</Button>
    <Button onClick={redo}>重做</Button>
    <Button onClick={preview}>预览</Button>
    <Button onClick={save}>保存</Button>
    <Button onClick={clear}>清空</Button>
    <Button onClick={compose}>组合</Button>
    <Button onClick={decompose} disabled={true}>拆分</Button>
    <Button onClick={lock} disabled={true}>锁定</Button>
    <Button onClick={unlock} disabled={true}>解锁</Button>
    <div className={style['canvas-config']}>
      <span>画布大小</span>
      <Input
        className={style['canvas-input']}
        value={canvasWidth}
        size="small"
        onChange={onChangeCanvasWith}/>
      <span>X</span>
      <Input
        className={style['canvas-input']}
        value={canvasHeight}
        size="small"
        onChange={onChangeCanvasHeight}/>
    </div>
    <div className={style['canvas-config']}>
      <span>画布比例</span>
      <Input
        className={style['canvas-input']}
        value={canvasScale}
        size="small"
        onChange={onChangeCanvasScale}/>
      <span>%</span>
    </div>
  </div>;
};

export default Layout;
