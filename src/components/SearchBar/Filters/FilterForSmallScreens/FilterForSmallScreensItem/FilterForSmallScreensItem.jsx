import PropTypes from 'prop-types';
import s from './FilterForSmallScreensItem.module.sass';

const FilterForSmallScreensItem = ({ filterItemData, type, formData, addDataToFormData }) => {

    return (
        <>
            {filterItemData.map(({ value, label }) => {
                return (
                    <label className={s.radio} key={label}>
                        <input className={s.radio__input} type="radio" name={type} value={value} checked={formData[type] === value} onChange={addDataToFormData} />
                        <span className={s.radio__icon}></span>
                        {label}
                    </label>
                )
            })}
        </>
    );
}

FilterForSmallScreensItem.propTypes = {
    filterItemData: PropTypes.array,
    formData: PropTypes.object,
    addDataToFormData: PropTypes.func,
    type: PropTypes.string,
}

export default FilterForSmallScreensItem;