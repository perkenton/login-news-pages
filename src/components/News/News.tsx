import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './News.module.scss';
import EditNewsModal from './EditNewsModal/EditNewsModal';
import { NewsData } from '../../data/news';
import { DataStorageMethods, DataStorage } from '../../utils/DataStorage';
import editSymbol from './images/edit.svg';


function News() {
  const news = useSelector((store: any) => store.news.news);
  const dataStorageMethods: DataStorage = new DataStorageMethods();
  const isAdmin: boolean = dataStorageMethods.getFromLocalStorage('isAccessAllowed') === 'true';
  const [ selectedNews, setSelectedNews ] = useState<NewsData>();
  const [ isModalOpened, setIsModalOpened ] = useState<boolean>(false);


  const editNews = (news: NewsData) => {
    if(isAdmin) {
      setSelectedNews(news);
      setIsModalOpened(true);
    }
  }


  return (
    <div className={ styles.news }>
      <h1 className='mainTitle'>Новости</h1>
      <div className={ styles.block }>

        {
          news.map((item: NewsData) => {
            return (
              <div key={ item.id } className={ styles.newsCard }>
                <img src={ item.image } alt='Картинка новости' className={ styles.newsImg }/>
                <div className={ styles.newsTextWrapper }>
                  <h2 className={ styles.newsTitle }>{ item.title }</h2>
                  <p className={ styles.newsText }>{ item.text }</p>
                  <a href={ item.source } className={ styles.newsLink } title={ item.source } target='_blank' rel='noopener' >{ item.source }</a>
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
          <EditNewsModal
            isModalOpened={ isModalOpened }
            setIsModalOpened={ setIsModalOpened }
            selectedNews={ selectedNews }
          />
        }

      </div>
   </div>
  );
}

export default News;