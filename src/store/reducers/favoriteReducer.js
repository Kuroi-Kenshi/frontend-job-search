import { omit } from 'lodash';
import {
  ADD_VACANCY_TO_FAVORITES,
  REMOVE_VACANCY_FROM_FAVORITES,
} from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VACANCY_TO_FAVORITES:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_VACANCY_FROM_FAVORITES:
      return omit(state, [action.payload]);
    default:
      return state;
  }
};

export default favoriteReducer;
