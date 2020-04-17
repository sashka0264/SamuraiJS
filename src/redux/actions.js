import { usersAPI, profileAPI } from '../services/services';


export const SEND_MESSAGE = 'SEND-MESSAGE',
  ADD_POST = 'ADD-POST',
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET-USERS',
  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
  SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
  TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING',
  SET_USER_PROFILE = 'SET-USER-PROFILE',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS',
  SET_USER_STATUS = 'SET-USER-STATUS',
  UPDATE_USER_STATUS = 'UPDATE-USER-STATUS',
  DELETE_POST = 'DELETE-POST',
  SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS',
  SET_PAGE_PERIOD = 'SET-PAGE-PERIOD';

export const sendMessageAC = (text) => ({ type: SEND_MESSAGE, content: text }),
  addPostAC = (text) => ({ type: ADD_POST, postMessage: text }),
  deletePostAC = (id) => ({ type: DELETE_POST, id }),
  followAC = (id) => ({ type: FOLLOW, id }),
  unfollowAC = (id) => ({ type: UNFOLLOW, id }),
  setUsersAC = (users) => ({ type: SET_USERS, users }),
  setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page }),
  setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count }),
  toggleIsLoadingAC = (loadingStatus) => ({ type: TOGGLE_IS_LOADING, loadingStatus }),
  setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile }),
  toggleIsFollowingProgressAC = (status, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, status, userId }),
  setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status }),
  updateUserStatusAC = () => ({ type: UPDATE_USER_STATUS }),
  setPagePeriodAC = (usePage) => ({ type: SET_PAGE_PERIOD, usePage }),
  savePhotoAC = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

const followFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgressAC(true, id));
  const data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollowingProgressAC(false, id));
};

export const unfollowTC = (id) => async (dispatch) => {
    const apiMethod = usersAPI.getDeleteUser.bind(usersAPI),
      actionCreator = unfollowAC;
    followFlow(dispatch, id, apiMethod, actionCreator);
  },
  followTC = (id) => async (dispatch) => {
    const apiMethod = usersAPI.getPostUser.bind(usersAPI),
      actionCreator = followAC;
    followFlow(dispatch, id, apiMethod, actionCreator);
  },
  getUsersTC = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsLoadingAC(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsLoadingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
  },
  getProfileTC = (id) => async (dispatch) => {
    const data = await profileAPI.getProfile(id);
    dispatch(setUserProfileAC(data));
  },
  getUserStatusTC = (id) => async (dispatch) => {
    const data = await profileAPI.getStatus(id);
    dispatch(setUserStatusAC(data));	
  },
  updateUserStatusTC = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatusAC(status));
    }
  },
  // Если будет много dispatch
  saveProfileInfoTC = (formData, isAuthUserId, deactivateMode) => async (dispatch) => {
    const response = await profileAPI.saveProfile(formData);
    if (response.resultCode === 0) {
      await dispatch(getProfileTC(isAuthUserId));
      deactivateMode();
    }
  },
  savePhotoTC = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    // console.log(response)
    if (response.resultCode === 0) {
      dispatch(savePhotoAC(response.data.photos));
    }
  };
