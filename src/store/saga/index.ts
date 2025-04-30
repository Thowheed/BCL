import { takeEvery } from "redux-saga/effects";

// import {
//     createOrUpdateUserAddressListSaga
// } from "./mukizhSaga";

import {
    getUserAddressListLoad,
    getUserListLoad
} from "../reducer/indexSlice";
import { getUserAddressListSaga, getUserListSaga } from "./mukizhSaga";

export function* baclSaga() {
    yield takeEvery(getUserAddressListLoad, getUserAddressListSaga);
    yield takeEvery(getUserListLoad, getUserListSaga);
}