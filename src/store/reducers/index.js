import { combineReducers } from 'redux';
import activeVacancyReducer from './activeVacancyReducer';
import favoriteReducer from './favoriteReducer';
import formDataReducer from './formDataReducer';
import closeDescriptionReducer from './closeDescriptionReducer';
import infoMessagesStatusReducer from './infoMessagesStatusReducer';
import searchBarVisibilityReducer from './searchBarVisibilityReducer';

export default combineReducers({
  activeVacancyReducer,
  favoriteReducer,
  formDataReducer,
  closeDescriptionReducer,
  infoMessagesStatusReducer,
  searchBarVisibilityReducer,
});
