import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (sliceState, action) => {
      sliceState.name = action.payload;
    },
  },
});
export const selectNameFilter = (reduxState) => reduxState.filters.name;
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
