'use-client'

import { createSlice } from "@reduxjs/toolkit";

export interface IPlayer {
    id?: number;
    name: string;
    description: string
}

export interface IPlayerState {
    data: IPlayer,
    success: boolean,
    isLoading: boolean,
    error: any,
}

const initialState: IPlayerState = {
    data: {
        id: 0,
        name: '',
        description: ''
    },
    success: false,
    isLoading: false,
    error: ''
}

const CreatePlayerReducer = createSlice({
    name: 'createPlayer',
    initialState: initialState,
    reducers: {
        createPlayerStart: (state, action) => {
            state.isLoading = true;
        },
        createPlayerSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.success = true;
        },
        createPlayerFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false;
            state.success = false;
        }
    }
})

export const { createPlayerStart, createPlayerSuccess, createPlayerFailed } = CreatePlayerReducer.actions;
export default CreatePlayerReducer.reducer;