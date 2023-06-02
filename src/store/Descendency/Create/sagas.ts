import { call, put } from "redux-saga/effects";
import DescendencyAPI from "../../../ApiHandler/Descendency/DescendencyAPI";
import { IDescendency, createDescendencyFailed, createDescendencySuccess } from "./reducer";

export function* fetchCreateDescendency(action){
    try {
        const result = yield call(DescendencyAPI.create, action.payload);
        const data: IDescendency = result.data;

        yield put(createDescendencySuccess(data));
    }
    catch (e) {
        yield put(createDescendencyFailed(e.message));
    }
}