import React from 'react';
import styles from './Main.module.scss';


function Main() {
  return (
    <div className={ styles.main }>
      <h1 className={ styles.title }>Главная</h1>
      <h2>Тестовое задание</h2>
      <p className={ styles.text }>В разделе Новости несколько тестовых новостей, которые можно редактировать после успешной авторизации.</p>
      <p className={ styles.text }>До прохождения авторизации раздел Профиль перенаправляет на страницу авторизации. После введении правильного логина и пароля происходит перенаправление на страницу профиля.</p>
      <p className={ styles.text }>Данные авторизации хранятся в Local Storage. Отредактированные новости не сохраняются.</p>
    </div>
  );
}

export default Main;