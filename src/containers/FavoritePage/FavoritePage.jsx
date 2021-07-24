import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'
import VacancyDescriptionModal from '@components/VacancyDescriptionModal';
import useWindowDimensions from '@hooks/useWindowDimensions'
import { setVisibilitySearchBar } from '@store/actions'

import s from './FavoritePage.module.sass';

const FavoritePage = () => {
  const dispatch = useDispatch()
  const dataVacancy = useSelector(store => store.favoriteReducer)
  const favoritesVacancies = useMemo(() => Object.values(dataVacancy), [dataVacancy])
  const vacancyId = useSelector(state => state.activeVacancyReducer)
  const descriptionIsOpen = useSelector(state => state.closeDescriptionReducer.isOpen)
  const descriptionVacancy = dataVacancy[vacancyId.id]
  const windowWidth = useWindowDimensions().width
  const breakpoint = 1025


  useEffect(() => {
    dispatch(setVisibilitySearchBar({ visible: false }))
    return () => dispatch(setVisibilitySearchBar({ visible: true }))
  }, [])

  return (
    <section className={s.main}>
      {Object.keys(dataVacancy).length ? (
        <div>
          <VacanciesList dataVacancies={favoritesVacancies} />
          {windowWidth <= breakpoint ? descriptionIsOpen && <VacancyDescriptionModal description={descriptionVacancy} /> : <VacancyDescription description={descriptionVacancy} />}
        </div>
      )
        : 'Тут ничего нет'}
    </section>
  );
}

export default FavoritePage;