import { createSlice } from "@reduxjs/toolkit";
import tree from "../../data/storePreloader.json";

const initialState = tree.MS;

export const MSSlice = createSlice({
  name: "MS",
  initialState,
  reducers: {
    MSCourseLock: (state, action) => {
      return { ...state, isSelected: action.payload.payload };
    },
  },
});

export const { MSCourseLock } = MSSlice.actions;
export default MSSlice.reducer;
