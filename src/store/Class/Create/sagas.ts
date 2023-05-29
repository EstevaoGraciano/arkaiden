import { call, put } from "redux-saga/effects";
import ClassAPI from "../../../apiHandler/class/ClassAPI";
import { IClass, createClassFailed, createClassSuccess } from "./reducer";

export function* fetchCreateClass(action){
    try {
        const result = yield call(ClassAPI.create, action.payload);
        const data: IClass = result.data;

        yield put(createClassSuccess(data));
    }
    catch (e) {
        yield put(createClassFailed(e.message));
    }
}