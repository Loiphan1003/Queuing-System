import { configureStore } from "@reduxjs/toolkit";
import breadcrumSlice from "./reducers/breadcrumbSlice";

const store = configureStore({
    reducer: {
        breadcrumb: breadcrumSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;