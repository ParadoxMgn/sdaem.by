import { FC, memo } from 'react';
import cn from 'classnames';
import { FaVk, FaFacebook, FaInstagram } from "react-icons/fa";

import visa from '../../../assets/img/pay/visa.png';
import master from '../../../assets/img/pay/mastercard.png';
import webpay from '../../../assets/img/pay/webpay.png';
import vervisa from '../../../assets/img/pay/ver-visa.png';
import securemaster from '../../../assets/img/pay/secure-master.png';
import belkart from '../../../assets/img/pay/belkart.png';
import st from './style.module.scss';
import { Link } from 'react-router-dom';

const FooterCommunity: FC = () => {  

  return (
    <div className={cn(st.wrapper)}>
      <div className={cn(st.social)}>
        <span>Мы в соцсетях</span>
        <Link to={"#"}>
          <FaInstagram fill='#1E2123'/>
        </Link>
        <Link to={"#"}>
          <FaVk fill='#1E2123'/>
        </Link>
        <Link to={"#"}>
          <FaFacebook fill='#1E2123'/>
        </Link>
      </div>
      <div className={cn(st.pay)}>
        <img src={visa} alt="visa" />
        <img src={webpay} alt="webpay" />
        <img src={vervisa} alt="vervisa" />
        <img src={master} alt="master" />
        <img src={securemaster} alt="securemaster" />
        <img src={belkart} alt="belkart" />
      </div>
    </div>
  );
}

export default memo(FooterCommunity);