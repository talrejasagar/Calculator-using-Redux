import { createSlice } from "@reduxjs/toolkit";

const CalOperation = createSlice({
  name: "CalOperation",
  initialState: {
    result: "",
  },
  reducers: {
    add: (state, action) => {
      state.result = +action.payload.input1 + +action.payload.input2;
    },
    substract: (state, action) => {
      state.result = action.payload.input1 - action.payload.input2;
    },
    multiply: (state, action) => {
      state.result = action.payload.input1 * action.payload.input2;
    },
    divide: (state, action) => {
      state.result = action.payload.input1 / action.payload.input2;
    },
    clear: (state) => {
      state.result = "";
    },
  },
});
export const { add, substract, multiply, divide, clear } = CalOperation.actions;

export default CalOperation.reducer;
