import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import HomeSvg from '../SvgIcons/HomeSvg';
import cn from 'classnames';

import st from './style.module.scss';
import Container from '../Container';


const BreadCrumbs: FC<{ mb: string, page: string }> = ({ mb, page }) => {

  return (
    <div className={st.wrapper} style={{marginBottom: `${mb}px`}}>
      <Container>
        <div className={st.row}>
          <Link to={"#"} className={cn(st.item)}>
            <HomeSvg fill={"#664EF9"} />
          </Link>
          <div className={cn(st.item, st.dot)} />
          <Link to={"#"} className={cn(st.item, st.page)}>
            {page}
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default memo(BreadCrumbs);