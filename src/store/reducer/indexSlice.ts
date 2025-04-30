import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isLoading: false,
    userListLoad: false,
    userListData: null,
    error: null,
    userAddressdata: null,
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

        resetTemporaryState: () => {
            return initialState;
        }
    }

});

export const { getUserAddressListLoad, getUserAddressListSuccess, getUserListLoad, getUserListSuccess } = bcl.actions;

export default bcl.reducer;