import { ADD_FORM_DATA } from '@store/constants/actionTypes';
// import { getLocalStorage } from '@utils/localStorage';

// const initialState = getLocalStorage('store');
const initialState = {
  location: 'Москва',
  schedule: 'fullDay',
  employment: 'full',
  experience: 'between1And3',
  salary: '150000',
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formDataReducer;
