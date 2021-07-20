import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NoLogo from '@components/NoLogo'
import { setActiveVacancy, setVacancyToFavorites, removeVacancyFromFavorites, closeDescription } from '@store/actions';

import Fillheart from './icons/FillHeart.svg'
import NotFillheart from './icons/NotFillHeart.svg'
import s from './VacancyCard.module.sass';

const VacancyCard = ({ idx, id, logo, companyName, position, salary, description, city, keySkills, datePublished }) => {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.activeVacancyReducer.id)
    const [inFavorites, setInFavorites] = useState(false)
    const favoritesData = useSelector(state => state.favoriteReducer)

    const getDate = () => {
        const date = new Date(datePublished)
        const publishedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        return publishedDate
    }

    const setActive = () => {
        dispatch(setActiveVacancy({ id }))
        dispatch(closeDescription({ isOpen: true }))
    }

    const dispatchVacancyFavorite = (e) => {
        e.stopPropagation()
        if (inFavorites) {
            dispatch(removeVacancyFromFavorites(id))
            setInFavorites(false)
        } else {
            dispatch(
                setVacancyToFavorites({
                    [id]: {
                        id,
                        employer: {
                            name: companyName,
                            logo_urls: logo
                        },
                        address: {
                            city
                        },
                        name: position,
                        salary,
                        description,
                        key_skills: keySkills,
                        published_at: datePublished
                    }
                })
            )
            setInFavorites(true)
        }
    }

    useEffect(() => {
        if (id in favoritesData) {
            setInFavorites(true)
        }
        idx === 0 && dispatch(setActiveVacancy({ id }))
    }, [])

    return (
        <div className={`${s.vacancyCard} ${isActive === id ? s.activeVacancy : ''}`} onClick={setActive} key={id}>
            <div className={s.vacancyCard__container}>
                <div className={s.vacancyCard__logo}>
                    {logo ? <img src={logo[90]} alt='Logo' /> : <NoLogo size={90} />}
                </div>
                <div className={s.vacancyCard__info}>
                    <div className={s.vacancyCard__title}>
                        <div className={s.vacancyCard__companyName}>{companyName}</div>
                        <div className={s.vacancyCard__position}>{position}</div>
                        <div className={s.vacancyCard__location}>{city}</div>
                        <ul className={s.vacancyCard__tags}>
                            {keySkills && keySkills.map(({ name }) => <li key={name} className={s.vacancyCard__tagsItem}>{name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.vacancyCard__favoriteBtn}>
                <img src={inFavorites ? Fillheart : NotFillheart} alt='Add To Favorites' onClick={dispatchVacancyFavorite} />
                <span>{getDate()}</span>
            </div>
        </div>

    );
}

VacancyCard.propTypes = {
    idx: PropTypes.number,
    id: PropTypes.string,
    companyName: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    datePublished: PropTypes.string,
    keySkills: PropTypes.array,
    logo: PropTypes.object,
    salary: PropTypes.object,
}

export default VacancyCard;