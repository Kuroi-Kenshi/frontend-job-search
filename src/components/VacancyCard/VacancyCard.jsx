import PropTypes from 'prop-types';

import img from './img/image20.png'
import Fillheart from './icons/FillHeart.svg'
import NotFillheart from './icons/NotFillHeart.svg'
import s from './VacancyCard.module.sass';

const VacancyCard = ({logo, companyName, position, city, keySkills, datePublished, isActive, inFavorites}) => {

	const getDate = () => {
		const date = new Date(datePublished)
		const publishedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
		return publishedDate
	}
	console.log(getDate());
  return (
			<div className={`${s.vacancyCard} ${isActive && s.activeVacancy}`}>
					<div className={s.vacancyCard__logo}>
							<img src={logo ? logo[90] : img} alt='Logo' />
					</div>
					<div className={s.vacancyCard__info}>
							<div className={s.vacancyCard__title}>
									<div className={s.vacancyCard__companyName}>{companyName}</div>
									<div className={s.vacancyCard__position}>{position}</div>
									<div className={s.vacancyCard__location}>{city}</div>
									<ul className={s.vacancyCard__tags}>
										{keySkills.map(({name}) => <li className={s.vacancyCard__tagsItem}>{name}</li>)}
											
											{/* <li className={s.vacancyCard__tagsItem}>JavaScript</li>
											<li className={s.vacancyCard__tagsItem}>CSS3</li>
											<li className={s.vacancyCard__tagsItem}>React</li>
											<li className={s.vacancyCard__tagsItem}>Git</li>
											<li className={s.vacancyCard__tagsItem}>Vue</li>
											<li className={s.vacancyCard__tagsItem}>Flexbox</li>
											<li className={s.vacancyCard__tagsItem}>HTML5</li> */}
									</ul>
							</div>
					</div>
					<div className={s.vacancyCard__favoriteBtn}>
							<img src={inFavorites ? Fillheart : NotFillheart} alt='Add To Favorites' />
							<span>{getDate()}</span>
					</div>
			</div>
  );
}

// VacancyCard.propTypes = {
//   text: PropTypes.string
// }

export default VacancyCard;