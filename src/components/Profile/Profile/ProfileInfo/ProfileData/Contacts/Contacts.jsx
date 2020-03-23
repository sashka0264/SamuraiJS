import React from 'react';
import style from './Contacts.module.css'

const Contacts = ({ facebook, website, vk, twitter, instagram, youtube, github }) => {
	return (
		<div className={style.contacts}>
			<div className={style.contactsTitle}>
        Контактная информация
      </div>

			<span>
        <span>facebook: </span> 
        {facebook ? facebook : "-"}
      </span>

			<span>
        <span>website: </span> 
        {website ? website : "-"} 
      </span>

			<span>
        <span>vk: </span> 
        {vk ? vk : "-"} 
      </span>

			<span>
        <span>twitter: </span> 
        {twitter ? twitter : "-"}
      </span>
      
			<span>
        <span>instagram: </span> 
        {instagram ? instagram : "-"}
      </span>

			<span>
        <span>youtube: </span> 
        {youtube ? youtube : "-"}
      </span>
      
			<span>
        <span>github: </span> 
        {github ? github : "-"}
      </span>
		</div>
	);
};

export default Contacts;