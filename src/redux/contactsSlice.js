import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
