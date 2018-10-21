import { takeLatest, all } from 'redux-saga/effects'
import fetchProfile from './profileSaga'

function * actionWatcher () {
  yield takeLatest('GET_PROFILE', fetchProfile)
}

export default function * rootSaga () {
  yield all([actionWatcher()])
}
