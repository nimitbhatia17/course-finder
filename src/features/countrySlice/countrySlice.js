import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [] };

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    countriesAdd: (state, action) => {
      return { ...state, countries: action.payload.countries };
    },
  },
});

export const { countriesAdd } = countrySlice.actions;
export default countrySlice.reducer;
