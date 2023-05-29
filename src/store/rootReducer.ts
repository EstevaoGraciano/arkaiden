'use client';
import { combineReducers } from 'redux';
import CreatePlayerReducer from './Player/Create/reducer'
import CreateDescendencyReducer from './Descendency/Create/reducer'
import GetAllDescendencyReducer from './Descendency/GetAll/reducer'
import GetByIdDescendencyReducer from './Descendency/GetById/reducer'
import CreateClassReducer from './Class/Create/reducer'
import GetAllClassReducer from './Class/GetAll/reducer'
import GetByIdClassReducer from './Class/GetById/reducer'

const descendency = combineReducers({
    create: CreateDescendencyReducer,
    getAll: GetAllDescendencyReducer,
    getById: GetByIdDescendencyReducer
})

const classes = combineReducers({
    create: CreateClassReducer,
    getAll: GetAllClassReducer,
    getById: GetByIdClassReducer
})

const rootReducer = combineReducers({
    player: CreatePlayerReducer,
    descendency: descendency,
    classes: classes
})

export default rootReducer;