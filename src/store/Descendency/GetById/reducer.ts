'use-client'

import { createSlice } from "@reduxjs/toolkit";
import { IDescendency, IDescendencyState } from "../Create/reducer";

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

const GetByIdDescendencyReducer = createSlice({
    name: 'getByIdDescendency',
    initialState: initialState,
    reducers: {
        getByIdDescendencyStart: (state, action) => {
            state.isLoading = true;
        },
        getByIdDescendencySuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        getByIdDescendencyFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { getByIdDescendencyStart, getByIdDescendencySuccess, getByIdDescendencyFailed } = GetByIdDescendencyReducer.actions;
export default GetByIdDescendencyReducer.reducer;