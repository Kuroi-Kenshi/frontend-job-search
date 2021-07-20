import { useState } from 'react'
import PropTypes from 'prop-types';

import s from './FilterDropDownItem.module.sass';

const FilterDropDownItem = ({ type, dropDownData, formData, addDataToFormData }) => {

    const [scheduleTitle, setScheduleForm] = useState('Полный день')
    const [employmentTitle, setEmploymentForm] = useState('Полная занятость')
    const [experienceTitle, setExperienceForm] = useState('От 1 года до 3 лет')

    const setRadioTitle = (e) => {

        if (e.target.name === 'schedule') {
            const title = e.target.labels[0].lastChild.textContent
            setScheduleForm(title)
        }

        if (e.target.name === 'employment') {
            const title = e.target.labels[0].lastChild.textContent
            setEmploymentForm(title)
        }

        if (e.target.name === 'experience') {
            const title = e.target.labels[0].lastChild.textContent
            setExperienceForm(title)
        }

    }

    const title = type === 'experience' ? experienceTitle : type === 'schedule' ? scheduleTitle : type === 'employment' ? employmentTitle : null
    return (
        <>
            <li className={`${s.filter__item} ${s[type]}`} onClick={setRadioTitle}>
                <button type='button' className={s.filter__button} id={`${type}Btn`}>{title}</button>
                <div className={s.dropdownForm} >
                    {dropDownData.map(({ value, label }) => {
                        return (
                            <label className={s.radio} key={label}>
                                <input className={s.radio__input} type="radio" name={type} value={value} checked={formData[type] === value} onChange={addDataToFormData} />
                                <span className={s.radio__icon}></span>
                                {label}
                            </label>
                        )
                    })}
                </div>
            </li>
        </>
    );
}

FilterDropDownItem.propTypes = {
    type: PropTypes.string,
    dropDownData: PropTypes.array,
    formData: PropTypes.object,
    addDataToFormData: PropTypes.func,
}

export default FilterDropDownItem;