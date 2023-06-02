import { call, put } from "redux-saga/effects";
import PlayerAPI from "../../../ApiHandler/Player/PlayerAPI";
import DescendencyAPI from "../../../ApiHandler/Descendency/DescendencyAPI";
import { IDescendency } from "../Create/reducer";
import { getAllDescendencyFailed, getAllDescendencySuccess } from "./reducer";

export function* fetchGetAllDescendency(){
    try {
        const result = yield call(DescendencyAPI.getAll);
        const data: IDescendency[] = result.data;

        yield put(getAllDescendencySuccess(data));
    }
    catch (e) {
        yield put(getAllDescendencyFailed(e.message));
    }
}