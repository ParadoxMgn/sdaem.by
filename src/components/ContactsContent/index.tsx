import { FC, memo } from 'react';
import cn from 'classnames';

import st from './style.module.scss';
import Container from '../Container';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaVk, FaFacebook, FaViber, FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PhoneSvg from '../SvgIcons/PhoneSvg';
import MailSvg from '../SvgIcons/MailSvg';
import ClockSvg from '../SvgIcons/ClockSvg';
import AttentionSvg from '../SvgIcons/AttentionSvg';
import ContactsForm from '../ContactsForm';

const ContactsContent: FC = () => {

  return (
    <div className={cn(st.wrapper)}>
      <Container>
        <div className={cn(st.row)}>
          <div className={cn(st.info)}>
            <div className={cn(st.title)}>Контакты</div>
            <div className={cn(st.text)}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</div>
            <div className={cn(st["block-contacts"])}>
              <div className={cn(st.str)}>
                <div className={cn(st.circle, st.label)}>
                  <FaMapMarkerAlt fill='#fff' />
                </div>
                <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
              </div>
              <div className={cn(st.str)}>
                <div className={cn(st.circle, st.label)}>
                  <PhoneSvg fill='#fff' />
                </div>
                <p>+375 29 621-48-33</p>
                <Link to={"#"} className={cn(st.circle, st.soc)}>
                  <FaViber fill='#fff'/>
                </Link>
                <Link to={"#"} className={cn(st.circle, st.soc)}>
                  <FaTelegramPlane fill='#fff'/>
                </Link>
                <Link to={"#"} className={cn(st.circle, st.soc)}>
                  <FaWhatsapp fill='#fff'/>
                </Link>
              </div>
              <div className={cn(st.str)}>
                <div className={cn(st.circle, st.label)}>
                  <MailSvg fill='#fff' />
                </div>
                <p className={cn(st.mail)}>sdaem@sdaem.by</p>
              </div>
              <div className={cn(st.str)}>
                <div className={cn(st.circle, st.label)}>
                  <ClockSvg fill='#fff' />
                </div>
                <p><span>Режим работы:</span> 08:00-22:00</p>
              </div>
            </div>
            <div className={cn(st.requisites)}>
              <p>ИП Шушкевич Андрей Викторович</p>
              <p>УНП 192602485 Минским горисполкомом 10.02.2016</p>
            </div>
            <div className={cn(st.attention)}>
              <div className={st.screamer}>
                <AttentionSvg fill='#5039BD' />
              </div>
              <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
            </div>
          </div>
          <ContactsForm />
          <div className={cn(st.social)}>
            <Link to={"#"} className={st.circle}>
              <FaInstagram fill='#fff' size='1.5em' />
            </Link>
            <Link to={"#"} className={st.circle}>
              <FaVk fill='#fff' size='1.5em' />
            </Link>
            <Link to={"#"} className={st.circle}>
              <FaFacebook fill='#fff' size='1.5em' />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(ContactsContent);