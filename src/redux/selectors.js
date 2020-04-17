// import {createSelector} from "reselect";

export const getUsers = (state) => {
  return state.global.usersPage.users;
},
getPageSize = (state) => {
  return state.global.usersPage.pageSize;
},
getTotalUsersCount = (state) => {
  return state.global.usersPage.totalUsersCount;
},
getCurrentPage = (state) => {
  return state.global.usersPage.currentPage;
},
getLoading = (state) => {
  return state.global.usersPage.loading;
},
getFollowingInProgress = (state) => {
  return state.global.usersPage.followingInProgress;
},
getIsAuth = ({ auth: { isAuth } }) => {
  return isAuth;
},
getPagePeriod = (state) => {
  return state.global.usersPage.pagePeriod;
};
