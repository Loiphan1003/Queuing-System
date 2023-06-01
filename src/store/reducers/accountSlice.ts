import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account } from "../../types";
import { getAllDataInColection } from "../../config/firebase/firestore";

export const getAllAccount = createAsyncThunk("Account: GET ALL", async () => {
    try {
        const res = await getAllDataInColection("accounts");
        return res;
    } catch (error) {
        return [];
    }
});


type accountSliceType = {
    accounts: account[];
    account: account;
    accountLogin: account;
    accountsFilter: account[];
    isFilter: boolean;
};

const initialState: accountSliceType = {
    accounts: [],
    account: {
        id: "",
        email: "",
        fullname: "",
        password: "",
        phone: "",
        role: "",
        status: "",
        username: "",
    },
    accountLogin: {
        id: "",
        email: "",
        fullname: "",
        password: "",
        phone: "",
        role: "",
        status: "",
        username: "",
    },
    accountsFilter: [],
    isFilter: false
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        addAccount: (state, action) => {
            state.account = action.payload;
        },
        clearAccount: (state, action) => {
            state.account = {
                id: "",
                email: "",
                fullname: "",
                password: "",
                phone: "",
                role: "",
                status: "",
                username: "",
            };
        },
        changeAccountLogin: (state, action) => {
            state.accountLogin = action.payload
        },
        updateAccounts: (state, action) => {
            state.accounts = action.payload;
        },
        filterAccounts: (state, action) => {
            state.accountsFilter = action.payload
        },
        updateFilterState: (state, action) => {
            state.isFilter = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getAllAccount.fulfilled, (state, action) => {
            state.accounts = action.payload;
        });
    },
});

export const { addAccount, clearAccount, changeAccountLogin ,updateAccounts, filterAccounts, updateFilterState } = accountSlice.actions;

export default accountSlice.reducer;
