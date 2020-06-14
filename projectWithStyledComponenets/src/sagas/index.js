import {all, fork} from 'redux-saga/effects'
import StatesSagas from './StatesSagas'

export function* rootSaga() {
	yield all([fork(StatesSagas)])
}
