import { call, put } from "redux-saga/effects";
import PlayerAPI from "../../../apiHandler/player/PlayerAPI";
import DescendencyAPI from "../../../apiHandler/descendency/DescendencyAPI";
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