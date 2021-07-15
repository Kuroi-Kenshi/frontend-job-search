import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'

import s from './FavoritePage.module.sass';

const FavoritePage = () => {
  const dataVacancy = useSelector(store => store.favoriteReducer)
  const vacancyId = useSelector(state => state.activeVacancyReducer)
  const descriptionVacancy = dataVacancy[vacancyId.id]
  
  const data = []
  const arrFromObj = () => {
    for (let key in dataVacancy) {
      data.push(dataVacancy[key])
    }
  }

  arrFromObj()

  return (
    <section className={s.main}>
      {Object.keys(dataVacancy).length ? (
        <div>
          <VacanciesList dataVacancies={data} />
          <VacancyDescription description={descriptionVacancy} />
        </div>
      ) : 'Тут ничего нет'}
    </section>
  );
}

export default FavoritePage;