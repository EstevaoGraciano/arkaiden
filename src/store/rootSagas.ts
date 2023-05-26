import { all, takeEvery } from 'redux-saga/effects'
import { fetchCreatePlayer } from './Player/Create/sagas';
import { fetchCreateDescendency } from './Descendency/Create/sagas';
import { fetchGetAllDescendency } from './Descendency/GetAll/sagas';
import { fetchGetByIdDescendency } from './Descendency/GetById/sagas';

function* rootSagas() {
    yield all([
        takeEvery('createPlayer/createPlayerStart', fetchCreatePlayer),
        takeEvery('createDescendency/createDescendencyStart', fetchCreateDescendency),
        takeEvery('getAllDescendency/getAllDescendencyStart', fetchGetAllDescendency),
        takeEvery('getByIdDescendency/getByIdDescendencyStart', fetchGetByIdDescendency)
    ])
}

export default rootSagas;