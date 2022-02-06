import { createSlice } from "@reduxjs/toolkit";
import screenLoader from "../../data/screenProgress.json";

const initialState = screenLoader;

export const screenProgressSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    screenLockCourse: (state, action) => {
      return { ...state, course: action.payload.course };
    },
    screenNext: (state, action) => {
      state.sno++;
      return state;
    },
    screenBack: (state, action) => {
      return state;
    },
  },
});

export const { screenLockCourse, screenNext, screenBack } =
  screenProgressSlice.actions;
export default screenProgressSlice.reducer;
