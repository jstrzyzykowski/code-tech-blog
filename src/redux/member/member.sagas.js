import {all, call, put, takeLatest} from 'redux-saga/effects';

import { memberTypes } from './member.types';
import { fetchMembersSuccess, fetchMembersFailure } from './member.actions';
import { firestore } from '../../firebase/firebase.utils';

export function* fetchMembers() {
  try {
    const membersRef = firestore.collection("guild_members");
    const membersSnapshot = yield membersRef.get();
    const members = yield membersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    members.sort((a, b) => {
      return a.hierarchy - b.hierarchy;
    });
    yield put(fetchMembersSuccess(members));
  } catch(error) {
    yield put(fetchMembersFailure(error));
  }
}

export function* onFetchMembersStart() {
  yield takeLatest(memberTypes.FETCH_MEMBERS_START, fetchMembers);
}

export function* membersSaga() {
  yield all([
    call(onFetchMembersStart),
  ]);
}