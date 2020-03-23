/* eslint-disable react/prop-types */
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getProfileTC, getUserStatusTC, updateUserStatusTC, savePhotoTC, saveProfileInfoTC} from "../../redux/actions";
import Profile from "./Profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { match: { params: { userId } } } = this.props,
      { match: { params: { userId : prevUserId } } } = prevProps;

    if (userId !== prevUserId) this.refreshProfile();
  }

  refreshProfile() {
    const {getProfileTC, getUserStatusTC, match, isAuthUserId, history} = this.props;
    let id = match.params.userId;
    if (!id) {
      id = isAuthUserId;
      if (!id) {
        history.push("/login");
      }
    }
    if (id) {
      getUserStatusTC(id);
      getProfileTC(id);
    }
  }

  sendProfileForm = (formData, deactivateMode) => {
    const {saveProfileInfoTC, isAuthUserId} = this.props;
    saveProfileInfoTC(formData, isAuthUserId, deactivateMode)
  }
  
  render() {
    
    const {
      profile, 
      status, 
      savePhotoTC, 
      updateUserStatusTC, 
      isAuthUserId, 
      match: { params: { userId } }
    } = this.props;
    
    return <Profile 
      {...this.props} 
      sendProfileForm={this.sendProfileForm}
      isOwner={!userId}
      profile={profile} 
      savePhoto={savePhotoTC}
      status={status} 
      updateUserStatusTC={updateUserStatusTC}
      isAuthUserId={isAuthUserId}
    />;
  }
};

const mapStateToProps = ({global}) => ({
  profile: global.profilePage.profile,
  status: global.profilePage.status,
  isAuth: global.auth.isAuth,
  isAuthUserId: global.auth.userId
});


export default compose(
  connect(mapStateToProps, {getProfileTC, saveProfileInfoTC, getUserStatusTC, updateUserStatusTC, savePhotoTC}),
  withRouter
  // Именно в таком порядке, снизу вверх, от первого к последнему
)(
  ProfileContainer
);