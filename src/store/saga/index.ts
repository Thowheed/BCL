import { takeEvery } from "redux-saga/effects";



import {
    addtocartListload,
    addtocartListSuccess,
    getUserAddressListLoad,
    getUserListLoad,
    loginListLoad,
    loginSuccess,
    siginListLoad,
    siginSuccess,
    updateuserListLoad,
    updateuserSuccess,
    getallproductListLoad,
    getallprodctSuccess,
    getproductusingidListLoad,
    getproductusingidSuccess

} from "../reducer/indexSlice";


import { addtoCartListSaga, getUserAddressListSaga, getUserListSaga, loginListsaga , siginListsaga  , updateuserListsaga , getallproductListSaga , getproductusingidListsaga } from "./bclsaga";

export function* baclSaga() {
    yield takeEvery(getUserAddressListLoad, getUserAddressListSaga);
    yield takeEvery(getUserListLoad, getUserListSaga);
    yield takeEvery(addtocartListload, addtoCartListSaga);
    yield takeEvery(loginListLoad, loginListsaga);
    yield takeEvery (siginListLoad, siginListsaga);
    yield takeEvery (updateuserListLoad , updateuserListsaga)
    yield takeEvery (getallproductListLoad ,getallproductListSaga )
    yield takeEvery (getproductusingidListLoad ,getproductusingidListsaga )

}