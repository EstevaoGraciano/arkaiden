'use-client'

import { createSlice } from "@reduxjs/toolkit";
import { IClassState } from "../Create/reducer";

const initialState: IClassState = {
    data: {
        id: 0,
        name: '',
        description: '',
        baseAgi: 0,
        baseCon: 0,
        baseDeathTurn: 0,
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

const GetByIdClassReducer = createSlice({
    name: 'getByIdClass',
    initialState: initialState,
    reducers: {
        getByIdClassStart: (state, action) => {
            state.isLoading = true;
        },
        getByIdClassSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        getByIdClassFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { getByIdClassStart, getByIdClassSuccess, getByIdClassFailed } = GetByIdClassReducer.actions;
export default GetByIdClassReducer.reducer;