import { all, call } from 'redux-saga/effects';

import { articleSagas } from './article/article.sagas';
import { userSagas } from './user/user.sagas';
import { modalSagas } from "./modal/modal.sagas";
import { membersSaga } from './member/member.sagas';

export default function* rootSaga() {
  yield all([
    call(articleSagas),
    call(userSagas),
    call(modalSagas),
    call(membersSaga),
  ]);
}