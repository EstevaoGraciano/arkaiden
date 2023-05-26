'use-client'

import { createSlice } from "@reduxjs/toolkit";

export interface IDescendency {
    id?: number;
    name: string;
    description: string
}

export interface IDescendencyState {
    data: IDescendency,
    success: boolean,
    isLoading: boolean,
    error: any,
}

const initialState: IDescendencyState = {
    data: {
        id: 0,
        name: '',
        description: ''
    },
    success: false,
    isLoading: false,
    error: ''
}

const CreateDescendencyReducer = createSlice({
    name: 'createDescendency',
    initialState: initialState,
    reducers: {
        createDescendencyStart: (state, action) => {
            state.isLoading = true;
        },
        createDescendencySuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        createDescendencyFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { createDescendencyStart, createDescendencySuccess, createDescendencyFailed } = CreateDescendencyReducer.actions;
export default CreateDescendencyReducer.reducer;