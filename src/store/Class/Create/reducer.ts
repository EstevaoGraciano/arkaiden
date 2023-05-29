'use-client'

import { createSlice } from "@reduxjs/toolkit";

export interface IClass {
    id?: number;
    name: string;
    description: string;
    baseStr: number;
    baseRes: number;
    baseInt: number;
    baseAgi: number;
    baseKnw: number;
    baseCon: number;
    baseHealth: number;
    baseGuard: number;
    baseLowGuard: number;
    baseDeathTurns: number;
}

export interface IClassState {
    data: IClass,
    success: boolean,
    isLoading: boolean,
    error: any,
}

const initialState: IClassState = {
    data: {
        id: 0,
        name: '',
        description: '',
        baseAgi: 0,
        baseCon: 0,
        baseDeathTurns: 0,
        baseGuard: 0,
        baseHealth: 0,
        baseInt: 0,
        baseKnw: 0,
        baseLowGuard: 0,
        baseRes: 0,
        baseStr: 0
    },
    success: false,
    isLoading: false,
    error: ''
}

const CreateClassReducer = createSlice({
    name: 'createClass',
    initialState: initialState,
    reducers: {
        createClassStart: (state, action) => {
            state.isLoading = true;
        },
        createClassSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        createClassFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { createClassStart, createClassSuccess, createClassFailed } = CreateClassReducer.actions;
export default CreateClassReducer.reducer;