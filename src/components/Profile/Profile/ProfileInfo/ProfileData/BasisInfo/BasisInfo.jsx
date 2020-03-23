import React from 'react';
import style from './BasisInfo.module.css'

const BasisInfo = ({ profile }) => {
	// console.log(profile)
	return (
		<div className={style.basis}>
			<div>Основная информация</div>
			<span><span>Обо мне: </span> {profile.aboutMe ? profile.aboutMe : "-"}</span>
			<span><span>В поиске работы: </span> {profile.lookingForAJob ? "Да" : "Нет"}</span>
			<span><span>Работа: </span> {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "-"}</span>
		</div>
	);
};

export default BasisInfo;