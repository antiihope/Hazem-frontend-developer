import { CHECK_AUTHENTICATION_SUCCESS, CHECK_AUTHENTICATION_FAILURE } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  error: null, // Stores any authentication error
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };

    case CHECK_AUTHENTICATION_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: 'Authentication failed',
      };

    default:
      return state;
  }
};

export default authReducer;
