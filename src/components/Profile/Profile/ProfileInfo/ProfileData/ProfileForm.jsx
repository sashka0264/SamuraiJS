import React from 'react';
import style from './ProfileForm.module.css';
import {createField} from '../../../../common/FormsControl/FormsControl';
import {reduxForm, Field} from "redux-form";

const ProfileForm = ({profile, isAuthUserId, id, editMode, handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {
        isAuthUserId === id && editMode && <button type="submit" className={style.edit}>Сохранить</button> 
      }

      <div className={style.basis}>
        <div>Основная информация</div>

        <span>
          <span>Полное имя*: </span> 
          { createField('', 'fullName', [], "input") }
        </span>

        <span>
          <span>Обо мне*: </span> 
          { createField('', 'aboutMe', [], "input") }
        </span>

        <span>
          <span>Ищу ли работу*: </span> 
          { createField('', 'lookingForAJob', [], "input", 'checkbox') }
        </span>

        <span>
          <span>Работа*: </span> 
          { createField('', 'lookingForAJobDescription', [], "input") }
        </span>
      </div>

      <div className={style.contacts}>
        <div className={style.contactsTitle}>
          Контактная информация
        </div>

        <span>
          <span>facebook: </span> 
          { createField('', 'contacts.facebook', [], "input") }
        </span> 

        <span>
          <span>website: </span> 
          { createField('', 'contacts.website', [], "input") }
        </span>

        <span>
          <span>vk: </span> 
          { createField('', 'contacts.vk', [], "input") }
        </span>

        <span>
          <span>twitter: </span> 
          { createField('', 'contacts.twitter', [], "input") }
        </span>
        
        <span>
          <span>instagram: </span> 
          { createField('', 'contacts.instagram', [], "input") }
        </span>

        <span>
          <span>youtube: </span> 
          { createField('', 'contacts.youtube', [], "input") }
        </span>
        
        <span>
          <span>github: </span> 
          { createField('', 'contacts.github', [], "input") }
        </span>

        <span>
          <span>mainLink: </span> 
          { createField('', 'contacts.mainLink', [], "input") }
        </span>
      </div>
    </form>
  );
};

const ProfileReduxForm = reduxForm({form: "profileInfo"})(ProfileForm);

const ProfileFormBlock = ({loginTC, isAuth, deactivateMode, profile, editMode, sendProfileForm}) => {
  const onSubmit = (formData) => {
    sendProfileForm(formData, deactivateMode);
    // loginTC(email, password, rememberMe);
  };

  // if (isAuth) return <Redirect to="/profile"/>;

  return (
    <div>
      <ProfileReduxForm 
        initialValues={profile}
        profile={profile}
        editMode={editMode}  
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ProfileFormBlock;