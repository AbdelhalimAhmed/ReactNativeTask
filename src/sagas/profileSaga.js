import { put } from 'redux-saga/effects'
import { profileReceived } from '../actions'

export default function * fetchProfile () {
  const data = yield fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(myJson => {
      return myJson
    })
  yield put(profileReceived(JSON.stringify(data, null,2)))
}
