const closeDescriptionReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case 'CLOSE_DESCRIPTION':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default closeDescriptionReducer;
