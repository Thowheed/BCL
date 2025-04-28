import ApiConstants from "@/Globals/ApiConstants";
import { message } from "antd";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { getUserAddressListSuccess } from "../reducer/indexSlice";
import { bclAxiosAPi } from "../http/Axios";

function* failSaga(result: any) {
    yield put({ type: ApiConstants.API_USER_FAIL });
    let msg = result.result.data
        ? result.result.data.message
        : ApiConstants?.SOMETHING_WENT_WRONG;
    message.config({
        duration: 1.5,
        maxCount: 1,
    });
    message.error(msg);
}

function* errorSaga(error: any) {
    yield put({
        type: ApiConstants.API_SR_ERROR,
        error: error,
        status: error.status,
    });

    message.config({
        duration: 1.5,
        maxCount: 1,
    });
    message.error(ApiConstants?.SOMETHING_WENT_WRONG);
}

export function* getUserAddressListSaga(action: any): SagaIterator {
    try {
        const response = yield call(bclAxiosAPi.getUserAddressListAxios, action.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(getUserAddressListSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}