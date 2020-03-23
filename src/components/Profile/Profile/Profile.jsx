/* eslint-disable react/prop-types */

import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, savePhoto, isOwner, isAuthUserId, status, sendProfileForm, updateUserStatusTC}) => {
	return (
		<>
			<ProfileInfo 
				sendProfileForm={sendProfileForm}
				isOwner={isOwner}
				profile={profile} 
				savePhoto={savePhoto}
				status={status} 
				isAuthUserId={isAuthUserId}
				updateUserStatusTC={updateUserStatusTC}/>
			<MyPosts/>
		</>
	);
};

export default Profile;