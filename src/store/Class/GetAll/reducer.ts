'use-client'

import { createSlice } from "@reduxjs/toolkit";
import { IClass } from "../Create/reducer";

export interface IClassListState {
    data: IClass[],
    success: boolean,
    isLoading: boolean,
    error: any,
}

const initialState: IClassListState = {
    data: [],
    success: false,
    isLoading: false,
    error: ''
}

const GetAllClassReducer = createSlice({
    name: 'getAllClass',
    initialState: initialState,
    reducers: {
        getAllClassStart: (state) => {
            state.isLoading = true;
        },
        getAllClassSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        getAllClassFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { getAllClassStart, getAllClassSuccess, getAllClassFailed } = GetAllClassReducer.actions;
export default GetAllClassReducer.reducer;