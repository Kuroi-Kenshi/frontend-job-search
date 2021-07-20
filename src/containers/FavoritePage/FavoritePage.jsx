import { useSelector } from 'react-redux';
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'
import VacancyDescriptionModal from '@components/VacancyDescriptionModal';
import useWindowDimensions from '@hooks/useWindowDimensions'

import s from './FavoritePage.module.sass';

const FavoritePage = () => {
  const dataVacancy = useSelector(store => store.favoriteReducer)
  const vacancyId = useSelector(state => state.activeVacancyReducer)
  const descriptionVacancy = dataVacancy[vacancyId.id]
  const descriptionIsOpen = useSelector(state => state.closeDescriptionReducer.isOpen)
  const windowWidth = useWindowDimensions().width
  const breakpoint = 1025

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
          {/* <VacancyDescription description={descriptionVacancy} /> */}
          {windowWidth <= breakpoint ? descriptionIsOpen && <VacancyDescriptionModal description={descriptionVacancy} /> : <VacancyDescription description={descriptionVacancy} />}
        </div>
      ) 
      : 'Тут ничего нет'}
    </section>
  );
}

export default FavoritePage;