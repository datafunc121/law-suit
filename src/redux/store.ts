import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"
import { apiSlice } from "./services/apiService"
import caseReducer from "./features/caseSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      case: caseReducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware), // Add the RTK-Query middleware
    devTools: process.env.NODE_ENV !== "production",
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
