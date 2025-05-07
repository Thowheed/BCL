import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { stat } from "fs";
import { act } from "react";

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


    //product api 

    //getall prodct api 

    getallProductLoad: false,
    getallProductData: null

};

const bcl = createSlice({
    name: "bcl",
    initialState: initialState,
    reducers: {
        getUserAddressListLoad: (state, action: PayloadAction<any>) => {
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

        addtocartListload: (state, action: PayloadAction<any>) => {
            state.addtocartLoad = true;

        },

        addtocartListSuccess: (state, action: PayloadAction<any>) => {

            state.addtocartLoad = false;
            state.addtocartData = action?.payload.result

        },


        //login code ////

        loginListLoad: (state, action: PayloadAction<any>) => {

            state.loginLoad = true
        },

        loginSuccess: (state, action: PayloadAction<any>) => {
            state.loginLoad = false
            state.loginData = action?.payload.result

        },

        // sigin code 

        siginListLoad: (state, action: PayloadAction<any>) => {
            state.siginLoad = true
        },

        siginSuccess: (state, action: PayloadAction<any>) => {
            state.siginLoad = false,
                state.siginData = action?.payload.result

        },

        //update user code

        updateuserListLoad: (state, action: PayloadAction<any>) => {
            state.updateuserLoad = true
        },

        updateuserSuccess: (state, action: PayloadAction<any>) => {
            state.updateuserLoad = false,
                state.updateuserData = action?.payload.result
        },

        //  get all product product api 


        getallproductListLoad: (state, action: PayloadAction<any>) => {
            state.getallProductLoad = true
        },

        getallprodctSuccess: (state, action: PayloadAction<any>) => {
            state.getallProductLoad = false
            state.getallProductData = action?.payload?.result

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
    getallproductListLoad, getallprodctSuccess } = bcl.actions;



export default bcl.reducer;