import { NewsType } from '../constants/news';
import { newsData } from '../../data/news';

const initialState = {
  news: newsData
}


function newsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NewsType.EDIT_NEWS :
      return {
        ...state,
        news: state.news.map((item) => {
          if(item.id === payload.id) {
            return {
              ...item,
              title: payload.title,
              text: payload.text,
              image: payload.image,
              source: payload.source
            }
          }
          return item;
        })
      }
    default:
      return state;
  }
}

export default newsReducer;