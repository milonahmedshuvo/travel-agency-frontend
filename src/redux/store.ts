/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import authReducer from "./slice/auth/authSlice"
import bookingReducer from "./slice/booking/booking"
import vehicleBookingReducer from "./slice/vehicleBooking/vehicleBookingSlice"
import accommodationBookingReducer from "./slice/accommodationBooking/accommodationBooking"
import searchQueryReducer from "./slice/searchFilter/searchFilter"

import { baseApi } from "./api/baseApi";



const createNoopStorage = () => {
  return {
    getItem(_key: string): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any): Promise<any> {
      return Promise.resolve(value);
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};


const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();


const authPersistConfig = {
  key: "authUser",
  storage,
};

const booking = {
  key: "booking",
  storage,
};

const VehicleBookingConfig = {
  key: "vehicleBooking",
  storage,
};

const accommodationStayBookingConfig = {
  key: "accommodationBooking",
  storage,
};


const searchQueryConfig = {
  key: "searchQuery",
  storage,
};


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedBookingReducer = persistReducer(booking, bookingReducer )
const persistedVehicleBookingReducer = persistReducer(VehicleBookingConfig, vehicleBookingReducer)
const persistedAccommodationBookingReducer = persistReducer(accommodationStayBookingConfig, accommodationBookingReducer)
const persistedSearchQueryReducer = persistReducer(searchQueryConfig,searchQueryReducer)














export const makeStore = () => {

  return configureStore({
    
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      booking: persistedBookingReducer,
      vehicleBooking: persistedVehicleBookingReducer,
      accommodationBooking: persistedAccommodationBookingReducer,
      searchQuery : persistedSearchQueryReducer
    },

    
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),


    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(baseApi.middleware),


  });
};




export const store = makeStore();
export const persistor = persistStore(store);



// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];