import React, { useState } from 'react';
import styles from './EditModal.module.scss';
import { NewsType } from '../../../data/news';


function EditModal(props: {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
  setEditedNews: (values: NewsType) => void,
  newsId?: number
}) {
  const [ title, setTitle ] = useState<string>();
  const [ text, setText ] = useState<string>();
  const [ image, setImage ] = useState<string>();
  const [ source, setSource ] = useState<string>();
  const [ isError, setIsError ] = useState<boolean>(false);


  const submit = (e: any) => {
    e.preventDefault();

    if(title && text && image && source) {
      props.setEditedNews({
        id: props.newsId || 0,
        title: title,
        text: text,
        image: image,
        source: source
      })
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
          defaultValue={ '' }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <textarea
          name='text'
          id='text'
          placeholder='Текст'
          className={ styles.textArea }
          required
          defaultValue={ '' }
          rows={ 3 }
          onChange={ (e) => setText(e.target.value) }
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
          defaultValue={ '' }
          onChange={ (e) => setImage(e.target.value) }
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
          defaultValue={ '' }
          onChange={ (e) => setSource(e.target.value) }
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