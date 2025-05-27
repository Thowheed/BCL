import ApiConstants from "@/Globals/ApiConstants";
import { http } from "./Http";
import { message } from "antd";
import { retry } from "redux-saga/effects";

const baseURL = 'https://api.purfull.com'

let loginUrl: any = `${baseURL}/api/e-commercelogin`;
let url: any = `${baseURL}/user/get-all-user`;
let Carturl: any = `${baseURL}/cart/createcart`;
let Loginurl: any = `${baseURL}/user/login`;
let siginurl : any = `${baseURL}/user/create-user`;
let updateuserurl : any = `${baseURL}/user/update-user`;
let getallproducturl : any =`${baseURL}/product/get-all-product`;
let getproductusingidurl : any = `${baseURL}/product/get-product`;
let getCartListurl : any = `${baseURL}/cart/getcart`;


const bclAxiosAPi = {
    getUserAddressListAxios: (payload: any) => {
        
        return Method.dataQuery(payload, loginUrl)
    },
    getUserListAxios:(payload: any) => {
        return Method.dataQuery(payload, url)

    },

    addtoCartListAxios :(payload:any)=>{
        return Method.dataQuery(payload, Carturl)

    },

    loginListAxios : (payload:any) => {

        return Method.dataQuery(payload ,Loginurl)

    },

    siginListAxios :(payload:any) => {
        return Method.dataQuery(payload, siginurl)

    },

    updateuserListAxios :(payload:any) => {
        return Method.dataPut(payload, updateuserurl)

    },
  
    getallproductListAxios :(payload:any) => {
        return Method.dataQuery(payload, getallproducturl)

    },
    getproductusingidListAxios : (payload:any) =>{
        return Method.dataQuery(payload,getproductusingidurl )

    },

    getCartListtAxios : (payload:any) =>{
        return Method.dataQuery(payload,getCartListurl )

    }
    
}

const Method = {
    async dataQuery(body: any, url: any) {
        return await new Promise((resolve, reject) => {
            http.post(url, {
                 body,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'access-control-allow-origin': '*',
                    // 'Authorization': token ? token : ``
                }
            }).then((result: any) => {
                if (result.status === 200) {
                    return resolve({
                        status: 1,
                        result: result,
                    });
                } else if (result.status == 212) {
                    return resolve({
                        status: 4,
                        result: result,
                    });
                } else {
                    if (result) {
                        return reject({
                            status: 3,
                            error: ApiConstants.SOMETHING_WENT_WRONG,
                        });
                    } else {
                        return reject({
                            status: 4,
                            error: ApiConstants.SOMETHING_WENT_WRONG,
                        });
                    }
                }
            }).catch((err: any) => {
                if (err.response) {
                    if (
                        err.response.status !== null &&
                        err.response.status !== undefined
                    ) {
                        if (err.response.status == 401) {
                            let unauthorizedStatus = err.response.status;
                            if (unauthorizedStatus == 401) {
                                // Logout();
                                message.error("401 unauthorized");
                            }
                        } else {
                            return reject({
                                status: 5,
                                error: err,
                            });
                        }
                    }
                } else {
                    return reject({
                        status: 5,
                        error: err,
                    });
                }
            });
        });
    },

    async dataPut(body: any, url: any) {
        return await new Promise((resolve, reject) => {
            http.put(url, {
                 body,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'access-control-allow-origin': '*',
                    // 'Authorization': token ? token : ``
                }
            }).then((result: any) => {
                if (result.status === 200) {
                    return resolve({
                        status: 1,
                        result: result,
                    });
                } else if (result.status == 212) {
                    return resolve({
                        status: 4,
                        result: result,
                    });
                } else {
                    if (result) {
                        return reject({
                            status: 3,
                            error: ApiConstants.SOMETHING_WENT_WRONG,
                        });
                    } else {
                        return reject({
                            status: 4,
                            error: ApiConstants.SOMETHING_WENT_WRONG,
                        });
                    }
                }
            }).catch((err: any) => {
                if (err.response) {
                    if (
                        err.response.status !== null &&
                        err.response.status !== undefined
                    ) {
                        if (err.response.status == 401) {
                            let unauthorizedStatus = err.response.status;
                            if (unauthorizedStatus == 401) {
                                // Logout();
                                message.error("401 unauthorized");
                            }
                        } else {
                            return reject({
                                status: 5,
                                error: err,
                            });
                        }
                    }
                } else {
                    return reject({
                        status: 5,
                        error: err,
                    });
                }
            });
        });
    },

    
}







export { bclAxiosAPi }