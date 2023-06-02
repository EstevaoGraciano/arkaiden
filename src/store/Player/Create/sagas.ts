import { call, put } from "redux-saga/effects";
import PlayerAPI from "../../../ApiHandler/Player/PlayerAPI";
import { IPlayer, createPlayerFailed, createPlayerSuccess } from "./reducer";

export function* fetchCreatePlayer(action){
    try {
        const result = yield call(PlayerAPI.create, action.payload);
        const data: IPlayer = result.data;

        yield put(createPlayerSuccess(data));
    }
    catch (e) {
        yield put(createPlayerFailed(e.message));
    }
}