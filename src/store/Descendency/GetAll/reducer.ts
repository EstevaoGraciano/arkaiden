'use-client'

import { createSlice } from "@reduxjs/toolkit";
import { IDescendency } from "../Create/reducer";

interface IDescendencyListState {
    data: IDescendency[];
    success: boolean;
    isLoading: boolean;
    error: any
}

const initialState: IDescendencyListState = {
    data: [],
    success: false,
    isLoading: false,
    error: ''
}

const GetAllDescendencyReducer = createSlice({
    name: 'getAllDescendency',
    initialState: initialState,
    reducers: {
        getAllDescendencyStart: (state) => {
            state.isLoading = true;
        },
        getAllDescendencySuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        getAllDescendencyFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { getAllDescendencyStart, getAllDescendencySuccess, getAllDescendencyFailed } = GetAllDescendencyReducer.actions;
export default GetAllDescendencyReducer.reducer;