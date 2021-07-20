import PropTypes from 'prop-types';
import FilterDropDownItem from './FilterDropDownItem';

const FilterDropDownList = ({ titles, dropDownData, formData, addDataToFormData, }) => {
  return (
    <>
      {titles.map((el) => (
        <FilterDropDownItem
          key={el}
          type={el}
          dropDownData={dropDownData[el]}
          formData={formData}
          addDataToFormData={addDataToFormData}
        />
      ))}
    </>
  );
};

FilterDropDownList.propTypes = {
  titles: PropTypes.array,
  dropDownData: PropTypes.object,
  formData: PropTypes.object,
  addDataToFormData: PropTypes.func,
};

export default FilterDropDownList;
