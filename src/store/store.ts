import { configureStore } from "@reduxjs/toolkit";
import breadcrumSlice from "./reducers/breadcrumbSlice";
import devicesSlice from "./reducers/devicesSlice";
import serviceSlice from "./reducers/serviceSlice";
import accountSlice from "./reducers/accountSlice";
import roleSlice from "./reducers/roleSlice";

const store = configureStore({
    reducer: {
        breadcrumb: breadcrumSlice,
        device: devicesSlice,
        service: serviceSlice,
        account: accountSlice,
        role: roleSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;