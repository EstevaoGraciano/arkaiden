'use-client';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const configureProjectStore = () => {

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    });
    
    sagaMiddleware.run(rootSagas);

    const getState = store.getState

    return { store, getState }
}

export type RootState = ReturnType<typeof rootReducer>;

export const { store, getState } = configureProjectStore();