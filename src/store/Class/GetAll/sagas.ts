import { call, put } from "redux-saga/effects";
import ClassAPI from "../../../ApiHandler/Class/ClassAPI";
import { IClass } from "../Create/reducer";
import { getAllClassFailed, getAllClassSuccess } from "./reducer";


export function* fetchGetAllClass(){
    try {
        const result = yield call(ClassAPI.getAll);
        const data: IClass[] = result.data;

        yield put(getAllClassSuccess(data));
    }
    catch (e) {
        yield put(getAllClassFailed(e.message));
    }
}