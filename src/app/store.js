import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import databaseReducer from "features/database/databaseSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    database: databaseReducer,
  },
});
