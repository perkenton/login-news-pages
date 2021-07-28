import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';
import EditModal from './EditModal/EditModal';
import { news, NewsType } from '../../data/news';
import { DataStorageMethods, DataStorage } from '../../utils/DataStorage';
import editSymbol from './images/edit.svg';


function News() {
  const dataStorageMethods: DataStorage = new DataStorageMethods();
  const isAdmin: boolean = dataStorageMethods.getFromLocalStorage('isAccessAllowed') === 'true';
  const [ newsArr, setNewsArr ] = useState<NewsType[]>(news);
  const [ selectedNews, setSelectedNews ] = useState<NewsType>();
  const [ editedNews, setEditedNews ] = useState<NewsType>();
  const [ isModalOpened, setIsModalOpened ] = useState<boolean>(false);


  const editNews = (news: NewsType) => {
    if(isAdmin) {
      setSelectedNews(news);
      setIsModalOpened(true);
    }
  }

  useEffect(() => {
    if(editedNews) {
      let copy: NewsType[] = Object.assign([], newsArr).filter((item: NewsType) => item.id !== editedNews.id);
      copy.push(editedNews);
      copy.sort((prev, next) => prev.id - next.id);
      setNewsArr(copy);
      setIsModalOpened(false);
    }
  }, [editedNews])


  return (
    <div className={ styles.news }>
      <h1 className={ styles.title }>Новости</h1>
      <div className={ styles.block }>

        {
          newsArr.map((item: NewsType) => {
            return (
              <div key={ item.id } className={ styles.newsCard }>
                <img src={ item.image } alt='Картинка новости' className={ styles.newsImg }/>
                <div className={ styles.newsTextWrapper }>
                  <h2 className={ styles.newsTitle }>{ item.title }</h2>
                  <p className={ styles.newsText }>{ item.text }</p>
                  <a href={ item.source } className={ styles.newsLink } target='_blank' rel='noopener' >{ item.source }</a>
                </div>
                {
                  isAdmin ?
                  <img
                    src={ editSymbol }
                    alt='Редактирование'
                    title='Редактировать новость'
                    className={ styles.editSymbol }
                    onClick={ () => editNews(item) }
                  />
                  : null
                }
              </div>
            )
          })
        }

        {
          isModalOpened && selectedNews &&
          <EditModal
            isModalOpened={ isModalOpened }
            setIsModalOpened={ setIsModalOpened }
            setEditedNews={ setEditedNews }
            selectedNews={ selectedNews }
          />
        }

      </div>
   </div>
  );
}

export default News;