/* eslint-disable react/prop-types */

import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, savePhoto, isOwner, isAuthUserId, status, updateUserStatusTC, disabledEditMode, changeEditMode, editMode}) => {
	return (
		<>
			<ProfileInfo 
				isOwner={isOwner}
				disabledEditMode={disabledEditMode}
				profile={profile} 
				savePhoto={savePhoto}
				editMode={editMode} 
				status={status} 
				changeEditMode={changeEditMode} 
				isAuthUserId={isAuthUserId}
				updateUserStatusTC={updateUserStatusTC}/>
			<MyPosts/>
		</>
	);
};

export default Profile;