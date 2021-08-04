import { NewsType } from '../constants/news';


export const editNews = (payload) => ({
  type: NewsType.EDIT_NEWS,
  payload,
});