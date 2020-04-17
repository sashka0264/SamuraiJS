import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../services/services';

const SET_USER_DATA = 'network/auth/SET-USER-DATA',  
  GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

export const getCaptchaAC = (url: any) => ({ type: GET_CAPTCHA_URL_SUCCESS, url }),
  setUserData = (userId: null, email: null, login: null, isAuth: boolean) => ({ type: SET_USER_DATA, userId, email, login, isAuth }),
  getCaptchaUrlTC = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaAC(response));
  },
  getMeTC = () => async (dispatch: any) => {
    const data = await authAPI.getMe();
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserData(id, email, login, true));
    }
  },
  loginTC = (email: any, password: any, rememberMe = false, antibot = null) => async (dispatch:any) => {
    const data = await authAPI.logIn(email, password, rememberMe, antibot);
    if (data.resultCode === 0) {
      dispatch(getMeTC());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrlTC());
      }

      const message = (data.messages.length > 0) ? data.messages[0] : 'Something wrong',
        action = stopSubmit('login', { _error: `${message}` });
      dispatch(action);
    }
  },
  logoutTC = () => async (dispatch: any) => {
    const data = await authAPI.logOut();
    if (data.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  };


const initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false as boolean,
  captchaUrl: null as null | string
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_CAPTCHA_URL_SUCCESS: 
      return {
        ...state,
        captchaUrl: action.url
      };
    case SET_USER_DATA:
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      };
    default:
      return state;
  }
};

export default reducer;