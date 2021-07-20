import { combineReducers } from 'redux';
import activeVacancyReducer from './activeVacancyReducer';
import favoriteReducer from './favoriteReducer';
import formDataReducer from './formDataReducer';
import closeDescriptionReducer from './closeDescriptionReducer';

export default combineReducers({
  activeVacancyReducer,
  favoriteReducer,
  formDataReducer,
  closeDescriptionReducer,
});
