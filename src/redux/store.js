import { configureStore } from "@reduxjs/toolkit";
import CalReducer from "../CalSlice";

const store = configureStore({ reducer: {CalReducer} });

export default store;
