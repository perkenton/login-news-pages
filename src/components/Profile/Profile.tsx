import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.scss';
import { ProfilesData } from '../../data/profiles';



function Profile() {
  const profiles = useSelector((store: any) => store.profiles.profiles);

  return (
    <div className={ styles.profile }>
      <h1 className='mainTitle'>Профиль</h1>

      {
        profiles.map((item: ProfilesData) => {
          return (
            <div className={ styles.aboutBlock }>
              <picture>
                <img src={ item.avatar } alt='Фото профиля' className={ styles.profilePicture }/>
              </picture>
              <ul className={ styles.list }>
                <li className={ styles.listItem }>
                  <span className={ styles.titleText }>Логин: </span>
                  <span className={ styles.text }>{ item.login }</span>
                </li>
                <li className={ styles.listItem }>
                  <span className={ styles.titleText }>Пароль: </span>
                  <span className={ styles.text }>{ item.password }</span>
                </li>
                <li className={ styles.listItem }>
                  <span className={ styles.titleText }>Доступ: </span>
                  <span className={ styles.text }>{ item.access.join(', ') }</span>
                </li>
              </ul>
            </div>
          )
        })
      }

    </div>
  );
}

export default Profile;