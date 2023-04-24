import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

type stateModel = {
    title: string,
    path: string
}

type BreadcrumState = {
    value: stateModel[]
}

const initialState: BreadcrumState = {
    value: []
}

export const breadcrumSlice = createSlice({
    name: "breadcrumb",
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        changeValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addValue, changeValue } = breadcrumSlice.actions

export default breadcrumSlice.reducer;