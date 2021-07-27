import React from 'react';
import styles from './Profile.module.scss';
import profilePic from '../../data/images/profile-picture.jpg';


function Profile() {
  return (
    <div className={ styles.profile }>
      <h1 className={ styles.title }>Профиль</h1>
      <div className={ styles.aboutBlock }>
        <picture>
          <img src={ profilePic } alt='Фото профиля' className={ styles.profilePicture } />
        </picture>
        <ul className={ styles.list }>
          <li className={ styles.listItem }><span className={ styles.titleText } >Логин: </span><span className={ styles.text } >Admin</span></li>
          <li className={ styles.listItem }><span className={ styles.titleText } >Пароль: </span><span className={ styles.text } >12345</span></li>
          <li className={ styles.listItem }><span className={ styles.titleText } >Доступ: </span><span className={ styles.text } >смотреть профиль, править новости</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;