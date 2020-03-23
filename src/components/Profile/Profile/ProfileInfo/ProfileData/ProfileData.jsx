import React, { useState } from 'react';
import Contacts from './Contacts/Contacts';
import BasisInfo from './BasisInfo/BasisInfo';
import ProfileFormBlock from './ProfileForm'
import style from './ProfileData.module.css';


const ProfileData = ({ profile, isAuthUserId, sendProfileForm, id }) => {
	const [editMode, setEditMode] = useState(false);
	const [newStatus, updateNewStatus] = useState("");
  const [disabled, setDisabled] = useState(false);
  
  // console.log(editMode)

	const activateMode = () => {
    if (id === isAuthUserId) {
      setEditMode(true);
    }
	};

	const deactivateMode = () => {
    setEditMode(false);
	};
  // console.log(profile)
	return (
		<div className={style.profileData}>
			
      {
        editMode ? <ProfileFormBlock
          profile={profile}
          sendProfileForm={sendProfileForm}
          id={id}
          editMode={editMode}
          isAuthUserId={isAuthUserId}
          lookingForAJobDescription={profile.lookingForAJobDescription}
          deactivateMode={deactivateMode}
        /> :

        <>
          {
            isAuthUserId === id && !editMode && <button className={style.edit} onClick={activateMode}>Редактировать</button> 
          }
          <BasisInfo 
            profile={profile} 
          />

          <Contacts contacts={profile.contacts}/>
        </>
      }
		</div>
	);
};

export default ProfileData;