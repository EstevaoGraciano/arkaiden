'use client';
import { combineReducers } from 'redux';
import CreatePlayerReducer from './Player/Create/reducer'

const rootReducer = combineReducers({
    player: CreatePlayerReducer
})

export default rootReducer;