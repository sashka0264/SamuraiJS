import { getMeTC } from './redux/authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS }),
  initializeAppTC = () => (dispatch: any) => {
    const promiseGetMe = dispatch(getMeTC());
    promiseGetMe.then(() => {
      dispatch(initializedSuccess());
    });
    Promise.all([promiseGetMe]).then(() => {
      dispatch(initializedSuccess());
    });
  };

const initialState = {
  initialized: false as boolean
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export default reducer;