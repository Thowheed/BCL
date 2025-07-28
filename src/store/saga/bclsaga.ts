// import ApiConstants from "@/Globals/ApiConstants";
// import { message } from "antd";
// import { SagaIterator } from "redux-saga";
// import { call, put } from "redux-saga/effects";
// import {
//   addtocartListSuccess,
//   getallprodctSuccess,
//   getproductusingidSuccess,
//   getUserAddressListSuccess,
//   getUserListSuccess,
//   loginSuccess,
//   siginSuccess,
//   updateuserSuccess,
//   getCartSuccess,
//   updatecartSuccess,
// } from "../reducer/indexSlice";
// import { bclAxiosAPi } from "../http/Axios";

// // Reusable failure handler
// function* failSaga(result: any): SagaIterator {
//   yield put({ type: ApiConstants.API_USER_FAIL });

//   const msg =
//     result?.result?.data?.message || ApiConstants.SOMETHING_WENT_WRONG;

//   message.config({ duration: 1.5, maxCount: 1 });
//   message.error(msg);
// }

// // Reusable error handler
// function* errorSaga(error: any): SagaIterator {
//   yield put({
//     type: ApiConstants.API_SR_ERROR,
//     error,
//     status: error?.status,
//   });

//   message.config({ duration: 1.5, maxCount: 1 });
//   message.error(ApiConstants.SOMETHING_WENT_WRONG);
// }

// // User Address List
// export function* getUserAddressListSaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getUserAddressListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(getUserAddressListSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // User List
// export function* getUserListSaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getUserListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(getUserListSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Add to Cart
// export function* addtoCartListSaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.addtoCartListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(addtocartListSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Login
// export function* loginListsaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.loginListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data,
//       };
//       yield put(loginSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Signin
// export function* siginListsaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.siginListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(siginSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Update User
// export function* updateuserListsaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.updateuserListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(updateuserSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Get All Products
// export function* getallproductListSaga(): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getallproductListAxios);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(getallprodctSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Get Product by ID
// export function* getproductusingidListsaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getproductusingidListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(getproductusingidSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Get Cart
// export function* getCartSaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getCartListtAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(getCartSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Update Cart
// export function* updatecartListsaga(action: { payload: any }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.updatecartListAxios, action.payload);

//     if (response.status === 1) {
//       const result = {
//         status: response.status,
//         result: response.result.data.data,
//       };
//       yield put(updatecartSuccess(result));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error);
//   }
// }

// // Get Products by Query
// export function* getProductsByQuerySaga(action: { payload: { name: string } }): SagaIterator {
//   try {
//     const response = yield call(bclAxiosAPi.getallproductListbyQueryAxios, action.payload.name);

//     yield put({
//       type: "GET_ALL_PRODUCT_LIST_BYQUERY_SUCCESS",
//       payload: response.result.data,
//     });
//   } catch (error) {
//     yield put({
//       type: "GET_ALL_PRODUCT_LIST_BYQUERY_FAILURE",
//       error,
//     });
//   }
// }
// import ApiConstants from "@/Globals/ApiConstants";
// import { message } from "antd";
// import { SagaIterator } from "redux-saga";
// import { call, put } from "redux-saga/effects";
// import {
//   addtocartListSuccess,
//   getallprodctSuccess,
//   getproductusingidSuccess,
//   getUserAddressListSuccess,
//   getUserListSuccess,
//   loginSuccess,
//   siginSuccess,
//   updateuserSuccess,
//   getCartSuccess,
//   updatecartSuccess,
// } from "../reducer/indexSlice";
// import { bclAxiosAPi } from "../http/Axios";

// // -------------------------
// // 🔸 Type Definitions
// // -------------------------
// interface SagaAction<T> {
//   payload: T;
// }

// interface ApiResponse<T = unknown> {
//   status: number;
//   result: {
//     data: {
//   message: string;
//       data: T;
//     };
//   };
// }

// interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//   };
// }

// interface CartItem {
//   id: string;
//   product: string;
//   quantity: number;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

// // -------------------------
// // 🔸 Reusable Handlers
// // -------------------------
// function* failSaga(result: ApiResponse): SagaIterator {
//   yield put({ type: ApiConstants.API_USER_FAIL });
//   const msg = result?.result?.data?.message || ApiConstants.SOMETHING_WENT_WRONG;
//   message.config({ duration: 1.5, maxCount: 1 });
//   message.error(msg);
// }

// function* errorSaga(error: { status?: number; message?: string }): SagaIterator {
//   yield put({
//     type: ApiConstants.API_SR_ERROR,
//     error,
//     status: error?.status,
//   });
//   message.config({ duration: 1.5, maxCount: 1 });
//   message.error(ApiConstants.SOMETHING_WENT_WRONG);
// }

// // -------------------------
// // 🔸 Sagas
// // -------------------------

// export function* getUserAddressListSaga(action: SagaAction<{ userId: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<any[]> = yield call(bclAxiosAPi.getUserAddressListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(getUserAddressListSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* getUserListSaga(action: SagaAction<{ adminId: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<any[]> = yield call(bclAxiosAPi.getUserListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(getUserListSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* addtoCartListSaga(action: SagaAction<{ productId: string; quantity: number }>): SagaIterator {
//   try {
//     const response: ApiResponse<CartItem[]> = yield call(bclAxiosAPi.addtoCartListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(addtocartListSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* loginListsaga(action: SagaAction<{ email: string; password: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<LoginResponse> = yield call(bclAxiosAPi.loginListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(loginSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* siginListsaga(action: SagaAction<{ email: string; password: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<any> = yield call(bclAxiosAPi.siginListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(siginSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* updateuserListsaga(action: SagaAction<{ userId: string; name?: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<any> = yield call(bclAxiosAPi.updateuserListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(updateuserSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* getallproductListSaga(): SagaIterator {
//   try {
//     const response: ApiResponse<Product[]> = yield call(bclAxiosAPi.getallproductListAxios);
//     if (response.status === 1) {
//       yield put(getallprodctSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* getproductusingidListsaga(action: SagaAction<{ productId: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<Product> = yield call(bclAxiosAPi.getproductusingidListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(getproductusingidSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* getCartSaga(action: SagaAction<{ userId: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<CartItem[]> = yield call(bclAxiosAPi.getCartListtAxios, action.payload);
//     if (response.status === 1) {
//       yield put(getCartSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* updatecartListsaga(action: SagaAction<{ cartId: string; quantity: number }>): SagaIterator {
//   try {
//     const response: ApiResponse<CartItem> = yield call(bclAxiosAPi.updatecartListAxios, action.payload);
//     if (response.status === 1) {
//       yield put(updatecartSuccess({ status: response.status, result: response.result.data }));
//     } else {
//       yield call(failSaga, response);
//     }
//   } catch (error) {
//     yield call(errorSaga, error as Error);
//   }
// }

// export function* getProductsByQuerySaga(action: SagaAction<{ name: string }>): SagaIterator {
//   try {
//     const response: ApiResponse<Product[]> = yield call(bclAxiosAPi.getallproductListbyQueryAxios, action.payload.name);
//     yield put({
//       type: "GET_ALL_PRODUCT_LIST_BYQUERY_SUCCESS",
//       payload: response.result.data,
//     });
//   } catch (error) {
//     yield put({
//       type: "GET_ALL_PRODUCT_LIST_BYQUERY_FAILURE",
//       error,
//     });
//   }
// }

import ApiConstants from "@/Globals/ApiConstants";
import { message } from "antd";
import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import {
  addtocartListSuccess,
  getallprodctSuccess,
  getproductusingidSuccess,
  getUserAddressListSuccess,
  getUserListSuccess,
  loginSuccess,
  siginSuccess,
  updateuserSuccess,
  getCartSuccess,
  updatecartSuccess,
} from "../reducer/indexSlice";
import { bclAxiosAPi } from "../http/Axios";

// -------------------------
// 🔸 Type Definitions
// -------------------------
interface SagaAction<T> {
  payload: T;
}

interface ApiResponse<T = unknown> {
  status: number;
  result: {
    data: {
      message: string;
      data: T;
    };
  };
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface CartItem {
  id: string;
  product: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserAddress {
  id: string;
  userId: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
}

// -------------------------
// 🔸 Reusable Handlers
// -------------------------
function* failSaga(result: ApiResponse): SagaIterator {
  yield put({ type: ApiConstants.API_USER_FAIL });
  const msg = result?.result?.data?.message || ApiConstants.SOMETHING_WENT_WRONG;
  message.config({ duration: 1.5, maxCount: 1 });
  message.error(msg);
}

function* errorSaga(error: { status?: number; message?: string }): SagaIterator {
  yield put({
    type: ApiConstants.API_SR_ERROR,
    error,
    status: error?.status,
  });
  message.config({ duration: 1.5, maxCount: 1 });
  message.error(ApiConstants.SOMETHING_WENT_WRONG);
}

// -------------------------
// 🔸 Sagas
// -------------------------

export function* getUserAddressListSaga(action: SagaAction<{ userId: string }>): SagaIterator {
  try {
    const response: ApiResponse<UserAddress[]> = yield call(bclAxiosAPi.getUserAddressListAxios, action.payload);
    if (response.status === 1) {
      yield put(getUserAddressListSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* getUserListSaga(action: SagaAction<{ adminId: string }>): SagaIterator {
  try {
    const response: ApiResponse<User[]> = yield call(bclAxiosAPi.getUserListAxios, action.payload);
    if (response.status === 1) {
      yield put(getUserListSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* addtoCartListSaga(action: SagaAction<{ productId: string; quantity: number }>): SagaIterator {
  try {
    const response: ApiResponse<CartItem[]> = yield call(bclAxiosAPi.addtoCartListAxios, action.payload);
    if (response.status === 1) {
      yield put(addtocartListSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* loginListsaga(action: SagaAction<{ email: string; password: string }>): SagaIterator {
  try {
    const response: ApiResponse<LoginResponse> = yield call(bclAxiosAPi.loginListAxios, action.payload);
    if (response.status === 1) {
      yield put(loginSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* siginListsaga(action: SagaAction<{ email: string; password: string }>): SagaIterator {
  try {
    const response: ApiResponse<LoginResponse> = yield call(bclAxiosAPi.siginListAxios, action.payload);
    if (response.status === 1) {
      yield put(siginSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* updateuserListsaga(action: SagaAction<{ userId: string; name?: string }>): SagaIterator {
  try {
    const response: ApiResponse<User> = yield call(bclAxiosAPi.updateuserListAxios, action.payload);
    if (response.status === 1) {
      yield put(updateuserSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* getallproductListSaga(): SagaIterator {
  try {
    const response: ApiResponse<Product[]> = yield call(bclAxiosAPi.getallproductListAxios);
    if (response.status === 1) {
      yield put(getallprodctSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* getproductusingidListsaga(action: SagaAction<{ productId: string }>): SagaIterator {
  try {
    const response: ApiResponse<Product> = yield call(bclAxiosAPi.getproductusingidListAxios, action.payload);
    if (response.status === 1) {
      yield put(getproductusingidSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* getCartSaga(action: SagaAction<{ userId: string }>): SagaIterator {
  try {
    const response: ApiResponse<CartItem[]> = yield call(bclAxiosAPi.getCartListtAxios, action.payload);
    if (response.status === 1) {
      yield put(getCartSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* updatecartListsaga(action: SagaAction<{ cartId: string; quantity: number }>): SagaIterator {
  try {
    const response: ApiResponse<CartItem> = yield call(bclAxiosAPi.updatecartListAxios, action.payload);
    if (response.status === 1) {
      yield put(updatecartSuccess({ status: response.status, result: response.result.data }));
    } else {
      yield call(failSaga, response);
    }
  } catch (error) {
    yield call(errorSaga, error as Error);
  }
}

export function* getProductsByQuerySaga(action: SagaAction<{ name: string }>): SagaIterator {
  try {
    const response: ApiResponse<Product[]> = yield call(bclAxiosAPi.getallproductListbyQueryAxios, action.payload.name);
    yield put({
      type: "GET_ALL_PRODUCT_LIST_BYQUERY_SUCCESS",
      payload: response.result.data,
    });
  } catch (error) {
    yield put({
      type: "GET_ALL_PRODUCT_LIST_BYQUERY_FAILURE",
      error,
    });
  }
}
