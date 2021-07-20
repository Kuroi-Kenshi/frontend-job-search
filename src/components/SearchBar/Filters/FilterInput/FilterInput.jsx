import PropTypes from 'prop-types';
import s from './FilterInput.module.sass';

const FilterInput = ({nameInput, children, value, addDataToFormData, filtersIsOpen}) => {
  return (
      <>
        <li className={`${s.filter__item} ${s[nameInput]} ${filtersIsOpen && s.bottomBorderRadiusDisabled}`}>
            <input type='text' name={nameInput} placeholder={children} value={value} className={s.filter__input} onChange={addDataToFormData} required/>
        </li>
      </>
  );
}

FilterInput.propTypes = {
  children: PropTypes.string,
  dropDownData: PropTypes.object,
  formData: PropTypes.object,
  addDataToFormData:PropTypes.func,
  setFiltersIsOpen:PropTypes.func,
  filtersIsOpen:PropTypes.bool,
}

export default FilterInput;