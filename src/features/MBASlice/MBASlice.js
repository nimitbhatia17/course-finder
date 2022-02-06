import { createSlice } from "@reduxjs/toolkit";
import tree from "../../data/storePreloader.json";

const initialState = tree.MBA;

export const MBASlice = createSlice({
  name: "MBA",
  initialState,
  reducers: {
    MBACourseLock: (state, action) => {
      return { ...state, isSelected: action.payload.payload };
    },
  },
});

export const { MBACourseLock } = MBASlice.actions;
export default MBASlice.reducer;
