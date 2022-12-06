import { FC, useContext } from 'react';
import ThemeContext from '../../ThemeProvider/context';
import cn from 'classnames';
import st from "./style.module.scss";

const HeaderButton: FC = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <button className={cn(st.btn, {[st.dark]: dark})}>
      +  Разместить объявление
    </button>
  );
}

export default HeaderButton;