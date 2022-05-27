import { createSlice } from "@reduxjs/toolkit";

const CalOperation = createSlice({
  name: "CalOperation",
  initialState: {
    result: "",
  },
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.result = +action.payload.input1 + +action.payload.input2;
    },
  },
});
export const { add } = CalOperation.actions;

export default CalOperation.reducer;
