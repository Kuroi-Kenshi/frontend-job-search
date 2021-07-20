import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterInput from '@components/SearchBar/Filters/FilterInput'
import FilterDropDownList from '@components/SearchBar/Filters/FilterDropDownList';
import FilterForSmallScreens from '@components/SearchBar/Filters/FilterForSmallScreens'
import { addFormData } from '@store/actions'
import useWindowDimensions from '@hooks/useWindowDimensions'
import { dropDownData } from '@constants/formData'

import s from './SearchBar.module.sass';

const SearchBar = () => {
    const [formData, setFormData] = useState({
        location: '',
        schedule: 'fullDay',
        employment: 'full',
        experience: 'between1And3',
        salary: '',
    });
    const [filtersIsOpen, setFiltersIsOpen] = useState(false)
    const dispatch = useDispatch()
    const titles = Object.keys(dropDownData)
    const windowWidth = useWindowDimensions().width
    const breakpoint = 1025
    const isTablet = windowWidth < breakpoint

    const addDataToFormData = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const setFormDataState = (e) => {
        e.preventDefault()
        dispatch(addFormData(formData))
        setFormData(prev => ({ ...prev, location: '', salary: '' }))
        if (filtersIsOpen === true) {
            setFiltersIsOpen(false)
        }

    }

    return (
        <section className={s.wrapper}>
            <form action="" className={s.form}>
                <ul className={s.filter}>
                    <FilterInput filtersIsOpen={filtersIsOpen} nameInput='location' value={formData.location} addDataToFormData={addDataToFormData}>Город</FilterInput>
                    {isTablet ? null : <FilterDropDownList titles={titles} dropDownData={dropDownData} formData={formData} addDataToFormData={addDataToFormData} styles={s} />}
                    <FilterInput nameInput='salary' value={formData.salary} addDataToFormData={addDataToFormData}>Уровень дохода</FilterInput>
                    {isTablet &&
                        <FilterForSmallScreens filtersIsOpen={filtersIsOpen} setFiltersIsOpen={setFiltersIsOpen} styles={s} type={titles} dropDownData={dropDownData} formData={formData} addDataToFormData={addDataToFormData}>
                            Фильтры
                        </FilterForSmallScreens>
                    }
                </ul>
                <div className={`${s.submit_btn}`} >
                    <button type='submit' className={s.filter__button} onClick={setFormDataState}>Поиск</button>
                </div>
            </form>
        </section>
    );
}

export default SearchBar;