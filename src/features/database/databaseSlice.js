import { createSlice } from "@reduxjs/toolkit";

import { dataContent } from "features/database/database";

export const database = createSlice({
  name: "database",
  initialState: { dataContent: dataContent },
  reducers: {
    loadmore: (state) => {},
  },
});

export const { loadmore } = database.actions;

export const selectDatabase = (state) => state.database.dataContent;

export default database.reducer;
