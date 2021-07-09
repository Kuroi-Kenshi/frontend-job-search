import VacancyCard from '@components/VacancyCard';
import PropTypes from 'prop-types';
import s from './VacanciesList.module.sass';

const VacanciesList = (props) => {
    console.log(props);
  return (
      
      <section className={s.vacanciesList}>
          {props.map(({id, name, address, employer, key_skills, published_at}) => (
            <VacancyCard 
                key={id}
                logo={employer.logo_urls}
                companyName={employer.name}
                position={name}
                city={address ? address.city : ''}
                keySkills={key_skills}
                datePublished={published_at}
            />
          ))}

          {/* <VacancyCard isActive inFavorites/> */}

      </section>
  );
}

// VacanciesList.propTypes = {
//   text: PropTypes.string
// }

export default VacanciesList;