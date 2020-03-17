/* eslint-disable react/prop-types */
import React from "react";
import Spinner from "../../../common/Spinner/Spinner";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import style from "./ProfileInfo.module.css";
import defaultAvatar from "./img/defaultAvatar.png";

const ProfileInfo = ({
	profile, 
	savePhoto, 
	isAuthUserId, 
	isOwner, 
	status, 
	updateUserStatusTC, 
	disabledEditMode, 
	changeEditMode, 
	editMode
}) => {

	const onPhotoSelected = (e) => {
		if (e.target.files.length) {
			const file = e.target.files[0];
			savePhoto(file);
		}
	};
	
	return (
		(Object.keys(profile).length === 0) ?
		
		<Spinner/> :

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
				
				<div>
					<div className={style.appContentName}>{profile.fullName}</div>
					<ProfileStatus disabledEditMode={disabledEditMode} isAuthUserId={isAuthUserId}
						editMode={editMode} changeEditMode={changeEditMode} id={profile.userId} status={status} updateUserStatusTC={updateUserStatusTC}
					/>

					<div className={style.appContentBasis}>
						<div>Основная информация</div>
						<span><span>Обо мне: </span> {profile.aboutMe ? profile.aboutMe : "-"}</span>
						<span><span>Работа: </span> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "-"}</span>
					</div>

					<div className={style.appContentContacts}>
						<div>Контактная информация</div>
						<span><span>facebook: </span> {profile.contacts.facebook ? profile.contacts.facebook : "-"}</span>
						<span><span>website: </span> {profile.contacts.website ? profile.contacts.website : "-"}</span>
						<span><span>vk: </span> {profile.contacts.vk ? profile.contacts.vk : "-"}</span>
						<span><span>twitter: </span> {profile.contacts.twitter ? profile.contacts.twitter : "-"}</span>
						<span><span>instagram: </span> {profile.contacts.instagram ? profile.contacts.instagram : "-"}</span>
						<span><span>youtube: </span> {profile.contacts.youtube ? profile.contacts.youtube : "-"}</span>
						<span><span>github: </span> {profile.contacts.github ? profile.contacts.github : "-"}</span>
					</div>
				</div>
			</div>
		</div>
	);
};


export default ProfileInfo;