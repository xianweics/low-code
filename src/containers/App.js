import Toolbar from './toolbar/index';
import ComponentsList from "./componentList/index";
import Property from "./property/index";
import style from "./style.module.scss";
import { textState } from '@store';
import { useRecoilState } from 'recoil';

const App = () => {
  const [text, setText] = useRecoilState(textState);
  console.info(text);
  setTimeout(() => {
    setText('text demo');
  }, 1000);
  return <div className={style.app}>
    <Toolbar className={style.header}/>
    <div className={style.content}>
      <div className={style.list}>
        <ComponentsList/>
      </div>
      <div className={style['editor-outer']}>
        <div className={style.editor}></div>
      </div>
      <div className={style.property}>
        <Property/>
        <div className={style.property__content}>
        </div>
      </div>
    </div>
  </div>;
};

export default App;
