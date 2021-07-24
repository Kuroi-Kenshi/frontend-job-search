import {
  SET_VACANCY_ID,
  ADD_VACANCY_TO_FAVORITES,
  REMOVE_VACANCY_FROM_FAVORITES,
  ADD_FORM_DATA,
  CLEAR_DATA,
  CLOSE_DESCRIPTION,
  INFO_MESSAGES_STATUS,
  SEARCH_BAR_VISIBILITY,
} from '@store/constants/actionTypes';

export const addFormData = (data) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const clearFormData = () => ({
  type: CLEAR_DATA,
});

export const closeDescription = (data) => ({
  type: CLOSE_DESCRIPTION,
  payload: data,
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

export const setInfoMessagesStatus = (status) => ({
  type: INFO_MESSAGES_STATUS,
  payload: status,
});

export const setVisibilitySearchBar = (visibility) => ({
  type: SEARCH_BAR_VISIBILITY,
  payload: visibility,
});
