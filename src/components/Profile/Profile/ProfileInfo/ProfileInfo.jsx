/* eslint-disable react/prop-types */
import React from "react";
import Spinner from "../../../common/Spinner/Spinner";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "./img/defaultAvatar.png";
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = ({profile, savePhoto, 
	isAuthUserId, 
	isOwner, 
	status, 
	sendProfileForm,
	updateUserStatusTC
}) => {
	
	const onPhotoSelected = (e) => {
		if (e.target.files.length) {
			const file = e.target.files[0];
			savePhoto(file);
		}
	};
	
	return (
		(Object.keys(profile).length === 0) ? <Spinner/> :

		<div className={style.appContent}>
			<div className={style.appContentAvatarAndDescription}>

				<div className={style.profileDisplay}>
					<img 
						className={style.profileAvatar} 
						src={profile.photos.large ? profile.photos.large : defaultAvatar}
						alt="avatar"
					/>
					{ 
						isOwner && <div className={style.profileUpdate}>
							<input type="file" onChange={onPhotoSelected}/> 
						</div>
					}
				</div>
				
				<div className={style.profileUserData}>
					<div className={style.name}>{profile.fullName}</div>

					<ProfileStatus 
						isAuthUserId={isAuthUserId}
						id={profile.userId} 
						status={status} 
						updateUserStatusTC={updateUserStatusTC}
					/>

					<ProfileData 
						isAuthUserId={isAuthUserId}
						id={profile.userId} 
						profile={profile}
						sendProfileForm={sendProfileForm}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;