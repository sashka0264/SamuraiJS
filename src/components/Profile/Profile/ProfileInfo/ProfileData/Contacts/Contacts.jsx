import React from 'react';
import style from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <div className={style.contacts}>
    <div className={style.contactsTitle}>
      Контактная информация
    </div>

    <span>
      <span>facebook: </span> 
      {contacts.facebook ? contacts.facebook : '-'}
    </span>

    <span>
      <span>website: </span> 
      {contacts.website || '-'} 
    </span>

    <span>
      <span>vk: </span> 
      {contacts.vk || '-'} 
    </span>

    <span>
      <span>twitter: </span> 
      {contacts.twitter || '-'}
    </span>
      
    <span>
      <span>instagram: </span> 
      {contacts.instagram || '-'}
    </span>

    <span>
      <span>youtube: </span> 
      {contacts.youtube || '-'}
    </span>
      
    <span>
      <span>github: </span> 
      {contacts.github || '-'}
    </span> 
  </div>
);

export default Contacts;