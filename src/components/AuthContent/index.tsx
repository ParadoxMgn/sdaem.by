import { FC, memo } from 'react';
import cn from 'classnames';

import st from './style.module.scss';
import { Link } from 'react-router-dom';

const AuthContent: FC = () => {

  return (
    <div className={cn(st.wrapper)}>
      <div className={cn(st.block)}>
        <div className={cn(st.title)}>Авторизация</div>
        <div className={cn(st.text)}>Авторизуйтесь, чтобы начать публиковать свои объявления</div>
        <form className={cn(st.form)}>
          <input type="text" className={cn(st.login)} placeholder="Логин" />
          <input type="password" className={cn(st.pass)} placeholder="Пароль" />
          <div className={cn(st.row)}>
            <input type="checkbox" className={cn(st.check)} />
            <span>Запомнить меня</span>
            <Link to={'#'} className={cn(st.link)}>Забыли пароль?</Link>
          </div>
          <button className={cn(st.btn)}>Войти</button>
          <div className={cn(st.footer)}>
            <span>Еще нет аккаунта? </span>
            <Link to={'/registration'} className={cn(st.link)}>Создайте акканут</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(AuthContent);