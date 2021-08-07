import { ProfilesType } from '../constants/profiles';
import { profilesData } from '../../data/profiles';

const initialState = {
  profiles: profilesData
}


function profilesReducer(state = initialState, action) {
  // const { type, payload } = action;

  // На будущее может
  // switch (type) {
  //   case ProfilesType.EDIT_PROFILE :
  //     return {
  //       ...state,
  //       news: state.profiles.map((item) => {
  //         if(item.id === payload.id) {
  //           return {
  //             ...item,
  //             login: payload.login,
  //             password: payload.password,
  //             access: payload.access,
  //             avatar: payload.avatar
  //           }
  //         }
  //         return item;
  //       })
  //     }
  //   default:
  //     return state;
  // }
  return state;
}

export default profilesReducer;