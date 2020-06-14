import {call, all, takeEvery, put} from 'redux-saga/effects'
import {config} from '../services/api'
import {Types, fetchFailure, fetchSuccess} from '../ducks/states'

function* request() {
	try {
		const data = yield call(() =>
			fetch(config.getStates)
				.then((response) => response.json())
				.then((json) => json),
		)
		yield put(fetchSuccess(data))
	} catch (e) {
		yield put(fetchFailure(e))
	}
}

export default function* requestSagas() {
	yield all([yield takeEvery(Types.FETCH_REQUEST, request)])
}
