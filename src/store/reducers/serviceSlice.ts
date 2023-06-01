import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { service } from "../../types";
import { getAllDataInColection } from "../../config/firebase/firestore";


export const getAllServices = createAsyncThunk(
    "Service: GET ALL",
    async () => {
        try {
            const res = await getAllDataInColection('services');
            return res;
        } catch (error) {
            return [];
        }
    }
)


type serviceSliceType = {
    services: service[],
}

const initialState: serviceSliceType = {
    services: [],
}


const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getAllServices.fulfilled, (state, action) => {
            state.services = action.payload;
        })
    },

})

export default serviceSlice.reducer