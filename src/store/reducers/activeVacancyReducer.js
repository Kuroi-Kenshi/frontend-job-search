const setActiveVacancy = (state = {}, action) => {
  switch (action.type) {
    case 'SET_VACANCY_ID':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default setActiveVacancy;
