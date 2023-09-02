export const CHECK_AUTHENTICATION_SUCCESS = 'CHECK_AUTHENTICATION_SUCCESS';
export const CHECK_AUTHENTICATION_FAILURE = 'CHECK_AUTHENTICATION_FAILURE';

// Action creator to check authentication
export const verifyAuth = () => {
  return { type: CHECK_AUTHENTICATION_SUCCESS };
};

export const abortAuth = () => {
  return { type: CHECK_AUTHENTICATION_FAILURE };
};
