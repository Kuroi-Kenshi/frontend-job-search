import PropTypes from 'prop-types';

import s from './NoLogo.module.sass';

const NoLogo = ({ size }) => {
  const style = size === 90 ? s.noLogo__90 : size === 240 ? s.noLogo__240 : ''
  return (
    <div className={style}></div>
  );
}

NoLogo.propTypes = {
  size: PropTypes.number
}

export default NoLogo;