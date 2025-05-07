import ApiConstants from "@/Globals/ApiConstants";
import { message } from "antd";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { addtocartListSuccess, getallprodctSuccess, getproductusingidSuccess, getUserAddressListSuccess, getUserListSuccess ,
     loginListLoad ,loginSuccess , siginListLoad, siginSuccess , updateuserListLoad , updateuserSuccess } from "../reducer/indexSlice";
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

//user

export function* getUserListSaga(action: any): SagaIterator {
    try {
        console.log("inside getUserListSaga", action?.payload);
        const response = yield call(bclAxiosAPi.getUserListAxios, action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(getUserListSuccess(result));
        } else {
            yield call(failSaga, response);
        } 
    } catch (error) {
        yield call(errorSaga, error);
    }
}

////add to cart

export function* addtoCartListSaga(action: any): SagaIterator {
    try {
        console.log("inside getUserListSaga", action?.payload);
        const response = yield call(bclAxiosAPi.addtoCartListAxios, action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(addtocartListSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}


//login

export function* loginListsaga(action: any): SagaIterator {
    try {
        console.log("inside loginListsaga", action?.payload);
        const response = yield call(bclAxiosAPi.loginListAxios , action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(loginSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}

//sigin 

export function* siginListsaga(action: any): SagaIterator {
    try {
        console.log("inside loginListsaga", action?.payload);
        const response = yield call(bclAxiosAPi.siginListAxios , action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(siginSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}


/// update user 
export function* updateuserListsaga(action: any): SagaIterator {
    try {
        console.log("inside updateUserlistsaga", action?.payload);
        const response = yield call(bclAxiosAPi.updateuserListAxios , action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(updateuserSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}

//get all product 

export function* getallproductListSaga(action: any): SagaIterator {
    try {
        console.log("inside getallprodouctList", action?.payload);
        const response = yield call(bclAxiosAPi.getallproductListAxios , action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(getallprodctSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}


////get all product using id 

export function* getproductusingidListsaga(action: any): SagaIterator {
    try {
        console.log("inside getallprodctusing id", action?.payload);
        const response = yield call(bclAxiosAPi.getproductusingidListAxios , action?.payload);

        if (response.status == 1) {
            let result: any = {
                status: response.status,
                result: response.result.data.data,
            };
            yield put(getproductusingidSuccess(result));
        } else {
            yield call(failSaga, response);
        }
    } catch (error) {
        yield call(errorSaga, error);
    }
}