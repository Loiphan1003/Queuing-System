import { configureStore } from "@reduxjs/toolkit";
import breadcrumSlice from "./reducers/breadcrumbSlice";
import devicesSlice from "./reducers/devicesSlice";
import serviceSlice from "./reducers/serviceSlice";
import accountSlice from "./reducers/accountSlice";

const store = configureStore({
    reducer: {
        breadcrumb: breadcrumSlice,
        device: devicesSlice,
        service: serviceSlice,
        account: accountSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;