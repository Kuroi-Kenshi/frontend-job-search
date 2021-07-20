import VacancyCard from '@components/VacancyCard';
import PropTypes from 'prop-types';

import s from './VacanciesList.module.sass';

const VacanciesList = ({dataVacancies}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.vacanciesList}>
                {dataVacancies.map(({id, name, address, employer, salary, description, key_skills, published_at}, idx) => {
                    return <VacancyCard 
                        key={id}
                        idx={idx}
                        id={id}            
                        logo={employer?.logo_urls}
                        companyName={employer?.name}
                        position={name}
                        salary={salary}
                        description={description}
                        city={address ? address.city : ''}
                        keySkills={key_skills}
                        datePublished={published_at}
                    />
                })}
            </div>
        </div>
    );
}

VacanciesList.propTypes = {
    dataVacancies: PropTypes.array
}

export default VacanciesList;