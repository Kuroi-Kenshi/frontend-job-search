import { SEARCH_BAR_VISIBILITY } from '@store/constants/actionTypes';

const initialState = { visible: true };

const searchBarVisibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BAR_VISIBILITY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default searchBarVisibilityReducer;
