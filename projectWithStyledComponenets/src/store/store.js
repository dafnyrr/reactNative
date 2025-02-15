import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {logger} from 'redux-logger'

import {reducer} from '../ducks/states'
import {rootSaga} from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
