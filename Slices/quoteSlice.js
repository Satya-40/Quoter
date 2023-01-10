import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    remove (state, action) {
      state.value.filter((item) => item._id !== action.input);
    },
    add(state, action) {
      state.value.push(action.input);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
