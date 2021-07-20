import PropTypes from 'prop-types';
import FilterForSmallScreensItem from './FilterForSmallScreensItem'
import useWindowDimensions from '@hooks/useWindowDimensions'
import s from './FilterForSmallScreens.module.sass';

const FilterForSmallScreens = ({ type, dropDownData, formData, addDataToFormData, children, setFiltersIsOpen, filtersIsOpen }) => {

    const windowWidth = useWindowDimensions().width
    const breakpoint = 700
    const isMobile = windowWidth < breakpoint

    const openFilter = () => {
        setFiltersIsOpen(prev => !prev)
    }

    return (
        <>
            <li className={s.filters} >
                <button type='button' className={s.filters__button} onClick={openFilter}>{children}</button>
                <div className={`${s.dropdownForm} ${filtersIsOpen && s.active}`} >
                    <div className={s.dropdownForm__container}>
                        {isMobile &&
                            <label className={s.filters__label}>
                                Доход
                                <input type='text' name='salary' placeholder='Уровень дохода' value={formData.salary} className={s.filters__input} onChange={addDataToFormData} required />
                            </label>
                        }
                        {type.map((el) => {
                            const title = el === 'schedule' ? 'График работы' : el === 'employment' ? 'Тип занятости' : 'Опыт работы'
                            return (
                                <div className={s.filters__item} key={el}>
                                    <span className={s.filters__itemTitle}>{title}</span>
                                    <FilterForSmallScreensItem key={el} filterItemData={dropDownData[el]} type={el} formData={formData} addDataToFormData={addDataToFormData} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </li>
        </>
    );
}

FilterForSmallScreens.propTypes = {
    children: PropTypes.string,
    dropDownData: PropTypes.object,
    formData: PropTypes.object,
    addDataToFormData: PropTypes.func,
    setFiltersIsOpen: PropTypes.func,
    filtersIsOpen: PropTypes.bool,
}

export default FilterForSmallScreens;