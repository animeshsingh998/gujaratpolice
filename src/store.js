import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { formReducer } from "./reducers/formReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});
