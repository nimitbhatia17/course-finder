import { configureStore } from "@reduxjs/toolkit";
import MBAReducer from "../features/MBASlice/MBASlice";
import MSReducer from "../features/MSSlice/MSSlice";
import screenProgressReducer from "../features/screenProgressSlice/screenProgressSlice";
import countryReducer from "../features/countrySlice/countrySlice";

export default configureStore({
  reducer: {
    MBA: MBAReducer,
    MS: MSReducer,
    screen: screenProgressReducer,
    countries: countryReducer,
  },
});
