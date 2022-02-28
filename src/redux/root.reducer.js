import {combineReducers} from 'redux';

import modalReducer from './modal/modal.reducer';
import userReducer from './user/user.reducer';
import articleReducer from './article/article.reducer';
import menuReducer from './menu/menu.reducer';
import memberReducer from "./member/member.reducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  article: articleReducer,
  menu: menuReducer,
  member: memberReducer,
});

export default rootReducer;