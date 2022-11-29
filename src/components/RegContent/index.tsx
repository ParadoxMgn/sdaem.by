import { FC, memo } from 'react';
import cn from 'classnames';

import st from './style.module.scss';
import { Link } from 'react-router-dom';

const RegContent: FC = () => {

  return (
    <div className={cn(st.wrapper)}>
      <div className={cn(st.block)}>
        <div className={cn(st.reg)}>
          <div className={cn(st.title)}>Регистрация</div>
          <form className={cn(st.form)}>
            <input type="text" className={cn(st.login)} placeholder="Логин" />
            <input type="text" className={cn(st.login)} placeholder="Электронная почта" />
            <input type="password" className={cn(st.pass)} placeholder="Пароль" />
            <input type="password" className={cn(st.pass)} placeholder="Повторите пароль" />
            <button className={cn(st.btn)}>Зарегистрироваться</button>
            
          </form>
        </div>
        <div className={cn(st.info)}>
          <div className={cn(st.text)}>
            <span>Пользователь обязуется:</span>
            <ul className={cn(st.list)}>
              <li>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
              <li>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
          </div>
          <div className={cn(st.footer)}>
              <span>Уже есть аккаунт? </span>
              <Link to={'/auth'} className={cn(st.link)}>Войдите</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RegContent);