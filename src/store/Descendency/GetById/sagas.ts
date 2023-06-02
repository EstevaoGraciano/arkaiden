import { call, put } from "redux-saga/effects";
import PlayerAPI from "../../../ApiHandler/Player/PlayerAPI";
import DescendencyAPI from "../../../ApiHandler/Descendency/DescendencyAPI";
import { IDescendency } from "../Create/reducer";
import { getByIdDescendencyFailed, getByIdDescendencySuccess } from "./reducer";

export function* fetchGetByIdDescendency(action){
    try {
        const result = yield call(DescendencyAPI.getById, action.payload);
        const data: IDescendency[] = result.data;

        yield put(getByIdDescendencySuccess(data));
    }
    catch (e) {
        yield put(getByIdDescendencyFailed(e.message));
    }
}