import { useState } from 'react';
import { NavLink } from 'react-router-dom'

import s from './Header.module.sass';

const Header = () => {
    const [burgerIsOpen, setBurgerIsOpen] = useState(false)

    const openBurgerMenu = () => setBurgerIsOpen(prev => !prev)

    return (
        <>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <ul className={s.navigation}>
                        <li className={s.logo}><NavLink to='/' exact>Frontend <span>Job</span></NavLink></li>
                        <li className={`${s.navigation__container} ${burgerIsOpen && s.burgerMenuActive}`}>
                            <ul className={s.navigation__list}>
                                <li className={s.navigation__search}><NavLink to='/' exact onClick={openBurgerMenu}>Поиск вакансий</NavLink></li>
                                <li className={s.navigation__favorites}><NavLink to='/favorites' exact onClick={openBurgerMenu}>Избранные вакансии</NavLink></li>
                            </ul>
                        </li>
                        <li className={`${s.burger} ${burgerIsOpen && s.active}`} onClick={openBurgerMenu}>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;