import {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import SearchBar from '@components/SearchBar'
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'
import { getData } from '@utils/network'

import s from './SearchVacancy.module.sass';

const SearchVacancy = () => {

  const [vacanciesData, setVacancesData] = useState([])
    const city = 'Москва'

    const getVacanciesData = () => {
        (async () => {
            const data = await getData(`https://api.hh.ru/vacancies?text=Junior%20frontend%20${city}&only_with_salary=true&per_page=100`)
            data.items.forEach( async (el) => {
                const data = await getData(`https://api.hh.ru/vacancies/${el.id}`)
                setVacancesData(prev => [...prev, data])
            })
        })()
    }

    
    useEffect(() => {
        getVacanciesData()
    }, [])

// console.log(vacanciesData);

  return (
      <>
          <SearchBar />
          <section className={s.main}>
            {vacanciesData.length && <VacanciesList dataVacancy={vacanciesData} />}
            {vacanciesData.length && <VacancyDescription vacancyDescription={vacanciesData} />}
          </section>
      </>
  );
}

// SearchVacancy.propTypes = {
//   text: PropTypes.string
// }

export default SearchVacancy;