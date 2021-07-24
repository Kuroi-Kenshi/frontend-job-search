import { INFO_MESSAGES_STATUS } from '@store/constants/actionTypes';

const initialState = {
  errorApi: {
    status: false,
    type: null,
  },
  notFound: false,
};

const infoMessagesStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_MESSAGES_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default infoMessagesStatusReducer;
