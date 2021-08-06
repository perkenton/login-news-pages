import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import Modal from './Modal/Modal';
import { DataStorageMethods, DataStorage } from '../../utils/DataStorage';


enum InputType {
  TEXT = 'TEXT',
  PASSWORD = 'PASSWORD'
}

function Login() {
  const history = useHistory();
  const dataStorageMethods: DataStorage = new DataStorageMethods();

  const [ login, setLogin ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ inputType, setInputType ] = useState<InputType>(InputType.PASSWORD);
  const [ isModalOpened, setIsModalOpened ] = useState<boolean>(false);
  const [ modalText, setModalText ] = useState<string>('');


  const submit = (e: any) => {
    e.preventDefault();
    if(login === 'Admin' && password === '12345') {
      dataStorageMethods.setToLocalStorage('isAccessAllowed', 'true');
      history.push('/profile');
    } else {
      dataStorageMethods.setToLocalStorage('isAccessAllowed', 'false');
      openModal('Имя пользователя или пароль введены неверно.');
    }
  }

  const showPassword = () => {
    if(inputType === InputType.PASSWORD) {
      setInputType(InputType.TEXT);
    } else if(inputType === InputType.TEXT) {
      setInputType(InputType.PASSWORD);
    }
  }

  const openModal = (text: string) => {
    setModalText(text);
    setIsModalOpened(true);
  }


  return (
    <div className={ styles.login }>
      <h1 className='mainTitle'>Авторизация</h1>
      <form name='loginForm' className={ styles.form }>
        <input
          type='text'
          name='login'
          id='login'
          placeholder='Логин'
          className='basicInput'
          autoComplete='off'
          spellCheck={ false }
          onChange={ (e) => setLogin(e.target.value) }
        />
        <span className={ styles.inputWrapper }>
          <input
            type={ inputType }
            name='password'
            id='password'
            placeholder='Пароль'
            className='basicInput'
            autoComplete='off'
            spellCheck={ false }
            onChange={ (e) => setPassword(e.target.value) }
          />
          <button type='button' className={ styles.showPasswordButton } onClick={ () => showPassword() } title='Показать/скрыть пароль' />
        </span>
        <input
          type='submit'
          className='basicButton'
          onClick={ submit }
          value='Войти'
        />
        <p className={ styles.forgotPassword } onClick={ () => openModal('Бывает...') }>Забыли пароль?</p>

      </form>

      <Modal isModalOpened={ isModalOpened } setIsModalOpened={ setIsModalOpened } modalText={ modalText } />
    </div>
  );
}

export default Login;