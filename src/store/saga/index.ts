import { takeEvery } from "redux-saga/effects";

// import {
//     createOrUpdateUserAddressListSaga
// } from "./mukizhSaga";

import {
    getUserAddressListLoad
} from "../reducer/indexSlice";
import { getUserAddressListSaga } from "./mukizhSaga";

export function* baclSaga() {
    yield takeEvery(getUserAddressListLoad, getUserAddressListSaga);
}