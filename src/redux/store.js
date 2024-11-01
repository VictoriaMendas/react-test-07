import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    contacts: (contactsConfig, contactsReducer),
    filters: filterReducer,
  },
 
});

