import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import s from './Header.module.sass';

const Header = () => {
  return (
      <> 
        <header className={s.header}>
            <div className={s.wrapper}>
                <ul className={s.navigation}>
                    <li className={s.logo}><NavLink to='/' exact>Frontend <span>Job</span></NavLink></li>
                    <li className={s.navigation__search}><NavLink to='/' exact>Поиск вакансий</NavLink></li>
                    <li className={s.navigation__favorites}><NavLink to='/favorites' exact>Избранные вакансии</NavLink></li>
                </ul>
            </div>
        </header>
      </>
  );
}

// Header.propTypes = {
//   text: PropTypes.string
// }

export default Header;