import { all, takeEvery } from 'redux-saga/effects'
import { fetchCreatePlayer } from './Player/Create/sagas';

function* rootSagas() {
    yield all([
        takeEvery('createPlayer/createPlayerStart', fetchCreatePlayer)
    ])
}

export default rootSagas;