import { combineReducers } from 'redux';
import news from './news';
import profiles from './profiles';


export default combineReducers({
  news: news,
  profiles: profiles,
});