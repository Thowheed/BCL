import ApiConstants from "@/Globals/ApiConstants";
import { http } from "./Http";
import { message } from "antd";

let loginUrl: any = "http://localhost:4400/api/e-commercelogin";
let url: any = "http://localhost:4400/user/get-all-user";

const bclAxiosAPi = {
    getUserAddressListAxios: (payload: any) => {
        return Method.dataQuery(payload, loginUrl)
    },
    getUserListAxios:(payload: any) => {
        return Method.dataQuery(payload, url)

    }

    
}

const Method = {
    async dataQuery(body: any, url: any) {
        return await new Promise((resolve, reject) => {
            http.post(url, {
                query: body,
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
    }
}

export { bclAxiosAPi }