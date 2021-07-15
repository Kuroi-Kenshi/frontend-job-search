import { useSelector } from 'react-redux';
import SearchBar from '@components/SearchBar'
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'
import Loader from '@components/Loader'

import s from './SearchVacancy.module.sass';


const SearchVacancy = ({dataVacancies, loaderIsActive, notFound}) => {
    const vacancyId = useSelector(state => state.activeVacancyReducer)
    const dataVacancy = dataVacancies
    const description = dataVacancy.find((el) => el.id === vacancyId.id)

  return (
      <>
          <SearchBar />

          {dataVacancy.length === 0 && loaderIsActive ? <Loader />
            :notFound ? <section className={s.main}>Ничего не найдено</section> 
            :(
                <section className={s.main}>
                    <VacanciesList dataVacancies={dataVacancy} />
                    <VacancyDescription description={description} />
                </section>

            ) 
          }

          
      </>
  );
}

export default SearchVacancy;