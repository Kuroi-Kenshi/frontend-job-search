import {
  SET_VACANCY_ID,
  ADD_VACANCY_TO_FAVORITES,
  REMOVE_VACANCY_FROM_FAVORITES,
  ADD_FORM_DATA,
  CLEAR_DATA,
} from '@store/constants/actionTypes';

export const addFormData = (data) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const clearFormData = () => ({
  type: CLEAR_DATA,
});

export const setActiveVacancy = (vacancyId) => ({
  type: SET_VACANCY_ID,
  payload: vacancyId,
});

export const setVacancyToFavorites = (vacancyData) => ({
  type: ADD_VACANCY_TO_FAVORITES,
  payload: vacancyData,
});

export const removeVacancyFromFavorites = (id) => ({
  type: REMOVE_VACANCY_FROM_FAVORITES,
  payload: id,
});
