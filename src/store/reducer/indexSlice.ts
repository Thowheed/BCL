import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isLoading: false,
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
        resetTemporaryState: () => {
            return initialState;
        }
    }

});

export const { getUserAddressListLoad, getUserAddressListSuccess } = bcl.actions;

export default bcl.reducer;