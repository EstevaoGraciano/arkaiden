'use client';
import { combineReducers } from 'redux';
import CreatePlayerReducer from './Player/Create/reducer'
import CreateDescendencyReducer from './Descendency/Create/reducer'
import GetAllDescendencyReducer from './Descendency/GetAll/reducer'
import GetByIdDescendencyReducer from './Descendency/GetById/reducer'

const descendency = combineReducers({
    create: CreateDescendencyReducer,
    getAll: GetAllDescendencyReducer,
    getById: GetByIdDescendencyReducer
})
const rootReducer = combineReducers({
    player: CreatePlayerReducer,
    descendency: descendency
})

export default rootReducer;