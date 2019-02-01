import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "./consts";

const initialState = {
  user: null,
  message: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loading: true, message: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, message:null, user: action.payload };
    case LOGIN_ERROR:
      return { ...state, loading: false, message: action.payload };
    default:
      return { ...state };
  }
};
