import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './EditModal.module.scss';
import { editNews } from '../../../store/action/news';
import { NewsData } from '../../../data/news';


function EditModal(props: {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
  selectedNews: NewsData
}) {
  const dispatch = useDispatch();
  const [ formData, setFormData ] = useState<NewsData>(props.selectedNews);
  const [ isError, setIsError ] = useState<boolean>(false);


  const submit = (e: any) => {
    e.preventDefault();
    // Простая валидация на пустую строку и только пробелы
    const isFormValid = !Object.values(formData).some(item => item.toString().trim() === '');

    if(isFormValid) {
      dispatch(editNews(formData));
      props.setIsModalOpened(false)
    } else {
      setIsError(true)
    }
  }


  return (
    <div className={ styles.editModal } style={{ display: props.isModalOpened ? 'block' : 'none' }} >
      <span className={ styles.closeCross } onClick={ () => props.setIsModalOpened(false) } title='Закрыть'>×</span>
      <form name='editNews'>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Заголовок'
          className={ styles.input }
          autoComplete='off'
          required
          defaultValue={ formData.title }
          onChange={ (e) => setFormData({...formData, title: e.target.value}) }
        />
        <textarea
          name='text'
          id='text'
          placeholder='Текст'
          className={ styles.textArea }
          required
          defaultValue={ formData.text }
          rows={ 3 }
          onChange={ (e) => setFormData({...formData, text: e.target.value}) }
        />
        <input
          type='text'
          name='image'
          id='image'
          placeholder='Ссылка на изображение'
          pattern='^https?:\/\/(((www[.])+(?:.png|.jpg|.jpeg|.gif)))$'
          className={ styles.input }
          autoComplete='off'
          required
          defaultValue={ formData.image }
          onChange={ (e) => setFormData({...formData, image: e.target.value}) }
        />
        <input
          type='text'
          name='source'
          id='source'
          placeholder='Источник'
          pattern='^https?:\/\/(((www[.])?([A-Za-z0-9-]+([.][A-Za-z]+)+)([:](([1-5][0-9]{0,4})|(6[0-4][0-9]{3})|(65[0-4][0-9]{2})|(655[0-2][0-9]|6553[0-5])|([1-9][0-9]{0,3})))?)|((25[0-5]|2[0-4]\d|1\d|[1-9]\d{0,2})([.](25[0-5]|2[0-4]\d|[1-9]\d{0,2})){3}[:](([1-5][0-9]{0,4})|(6[0-4][0-9]{3})|(65[0-4][0-9]{2})|(655[0-2][0-9]|6553[0-5])|([1-9][0-9]{0,3}))))(\/[A-Za-z0-9,-]+){0,}([#,\/])?$'
          className={ styles.input }
          autoComplete='off'
          required
          defaultValue={ formData.source }
          onChange={ (e) => setFormData({...formData, source: e.target.value}) }
        />
        <p className={ styles.error }>{ isError ? 'Заполните все поля' : null }</p>
        <input
          type='submit'
          className={ styles.button }
          onClick={ submit }
          value='Сохранить'
        />
      </form>
    </div>
  )
}

export default EditModal;