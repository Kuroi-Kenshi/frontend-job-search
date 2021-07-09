import PropTypes from 'prop-types';
import s from './VacancyDescription.module.sass';

import logo from './img/logo.jpg'

const VacancyDescription = () => {
  return (
      <section className={s.vacancyInfo}>
        <header className={s.header}>
            {/* <div className={s.container}> */}
                <img src={logo} alt='Company Logo' />
                <div className={s.vacancyInfo__title}>
                    <h2 className={s.vacancyInfo__positionName}>Front-end Разработчик</h2>
                    <div className={s.vacancyInfo__company}>
                        <span className={s.vacancyInfo__companyName}>Интернет Люди</span>
                        <span className={s.vacancyInfo__location}>Москва</span>
                    </div>
                </div>
            {/* </div> */}
        </header>
        <div className={s.vacancyInfo__salary}>От 150 000 до 300 000</div>
        <hr className={s.horisontalLine}/>
        <div className={s.vacancyInfo__descr}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusamus illum doloremque necessitatibus consequatur quo repudiandae beatae deserunt reiciendis nisi est voluptatibus voluptates commodi aliquam culpa vel, maiores maxime consequuntur.</p>
        </div>
        
      </section>
  );
}

// VacancyDescription.propTypes = {
//   text: PropTypes.string
// }

export default VacancyDescription;