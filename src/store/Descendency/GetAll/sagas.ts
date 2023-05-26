import { call, put } from "redux-saga/effects";
import PlayerAPI from "../../../apiHandler/player/PlayerAPI";
import DescendencyAPI from "../../../apiHandler/descendency/DescendencyAPI";
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