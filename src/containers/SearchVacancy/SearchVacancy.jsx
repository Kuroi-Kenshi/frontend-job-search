import { useSelector } from 'react-redux';
import SearchBar from '@components/SearchBar'
import VacanciesList from '@components/VacanciesList'
import VacancyDescription from '@components/VacancyDescription'
import VacancyDescriptionModal from '@components/VacancyDescriptionModal'
import Loader from '@components/Loader'
import useWindowDimensions from '@hooks/useWindowDimensions'

import s from './SearchVacancy.module.sass';

const SearchVacancy = ({ dataVacancies, loaderIsActive, notFound }) => {
    const vacancyId = useSelector(state => state.activeVacancyReducer)
    const description = dataVacancies.find((el) => el.id === vacancyId.id)
    const descriptionIsOpen = useSelector(state => state.closeDescriptionReducer.isOpen)
    const windowWidth = useWindowDimensions().width
    const breakpoint = 1025

    return (
        <>
            <SearchBar />
            {dataVacancies.length === 0 && loaderIsActive ? <Loader />
                : notFound ? <section className={s.main}>Ничего не найдено</section>
                    : (
                        <section className={s.main}>
                            <VacanciesList dataVacancies={dataVacancies} />
                            {windowWidth <= breakpoint ? descriptionIsOpen && <VacancyDescriptionModal description={description} /> : <VacancyDescription description={description} />}
                        </section>
                    )
            }
        </>
    );
}

export default SearchVacancy;