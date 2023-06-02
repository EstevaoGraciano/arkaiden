import { call, put } from "redux-saga/effects";
import ClassAPI from "../../../ApiHandler/Class/ClassAPI";
import { IClass } from "../Create/reducer";
import { getByIdClassFailed, getByIdClassSuccess } from "./reducer";


export function* fetchGetByIdClass(action){
    try {
        const result = yield call(ClassAPI.getById, action.payload);
        const data: IClass[] = result.data;

        yield put(getByIdClassSuccess(data));
    }
    catch (e) {
        yield put(getByIdClassFailed(e.message));
    }
}