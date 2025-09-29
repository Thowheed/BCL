import { PayloadAction, createSlice
    // current 
} from "@reduxjs/toolkit";
// import { stat } from "fs";
// import { get } from "http";
// import { act } from "react";

const initialState = {
    isOpen: false,
    isLoading: false,
    userListLoad: false,
    userListData: null,
    error: null,
    userAddressdata: null,
    //my code 
    addtocartLoad: false,
    addtocartData: null,

    //login code 

    loginLoad: false,
    loginData: null,

    //sigin codee 

    siginLoad: false,
    siginData: null,

    //update usert 

    updateuserLoad: false,
    updateuserData: null,

    //update cart
    updatecartLoad: false,
    updatecartData: null,

    //product api 

    //getall prodct api 

    getallProductLoad: false,
    getallProductData: null,


    //get product using by id 
    getproductusingidLoad: false,
    getproductusingidData: null,

    getProductIdData: null,

    getCartListLoad: false,
    getCartData: null,


};

const bcl = createSlice({
    name: "bcl",
    initialState: initialState,
    reducers: {
        getUserAddressListLoad: (state) => {
            state.isOpen = true;
        },
        getUserAddressListSuccess: (state, action: PayloadAction<any>) => {
            state.isOpen = false;
            state.userAddressdata = action?.payload?.result?.getUserAddressListApi?.addressDataList;
        },

        getUserListLoad: (state, action: PayloadAction<any>) => {
            console.log("inside getUserListLoad", action?.payload);
            state.userListLoad = true;

        },
        getUserListSuccess: (state, action: PayloadAction<any>) => {
            console.log("inside getUserListSuccess", action?.payload?.result);
            state.userListLoad = false;
            state.userListData = action?.payload?.result;
        },

        //my code 

        addtocartListload: (state) => {
            state.addtocartLoad = true;

        },

        addtocartListSuccess: (state, action: PayloadAction<any>) => {

            state.addtocartLoad = false;
            state.addtocartData = action?.payload.result

        },


        //login code ////

        loginListLoad: (state) => {

            state.loginLoad = true
        },

        loginSuccess: (state, action: PayloadAction<any>) => {
            console.log("action?.payload", action?.payload)
            state.loginLoad = false
            state.loginData = action?.payload?.result

        },

        // sigin code 

        siginListLoad: (state) => {
            state.siginLoad = true
        },

        siginSuccess: (state, action: PayloadAction<any>) => {
            state.siginLoad = false;
                state.siginData = action?.payload.result

        },

        //update user code

        updateuserListLoad: (state) => {
            state.updateuserLoad = true
        },

        updateuserSuccess: (state, action: PayloadAction<any>) => {
            state.updateuserLoad = false;
                state.updateuserData = action?.payload.result
        },

        //  get all product product api 


        getallproductListLoad: (state) => {
            state.getallProductLoad = true
        },

        getallprodctSuccess: (state, action: PayloadAction<any>) => {
            state.getallProductLoad = false
            state.getallProductData = action?.payload?.result

        },

        //  getusingproduct id  product product api 


        getproductusingidListLoad: (state) => {
            state.getproductusingidLoad = true
        },

        getproductusingidSuccess: (state, action: PayloadAction<any>) => {
            state.getproductusingidLoad = false
            state.getproductusingidData = action?.payload.result
        },

        getProductWiseIdLoad: (state, action: PayloadAction<any>) => {
            state.getProductIdData = action?.payload
        },

        getCartLoad: (state) => {
            state.getCartListLoad = true
        },
        getCartSuccess: (state, action: PayloadAction<any>) => {
            state.getCartListLoad = false
            state.getCartData = action?.payload.result
        },

        //update cart code

        updatecartListLoad: (state) => {
            state.updatecartLoad = true
        },

        updatecartSuccess: (state, action: PayloadAction<any>) => {
            state.updatecartLoad = false;
                state.updatecartData = action?.payload.result
        },




        resetTemporaryState: () => {
            return initialState;
        }
    }

});

export const { getUserAddressListLoad, getUserAddressListSuccess,
    getUserListLoad, getUserListSuccess,
    addtocartListSuccess, addtocartListload,
    loginListLoad, loginSuccess,
    siginListLoad, siginSuccess,
    updateuserListLoad, updateuserSuccess,
    getallproductListLoad, getallprodctSuccess, getproductusingidListLoad, getproductusingidSuccess, getProductWiseIdLoad,
    getCartLoad, getCartSuccess,
    updatecartListLoad, updatecartSuccess
} = bcl.actions;



export default bcl.reducer;