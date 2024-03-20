import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

export const store = configureStore({
  reducer: {
    // key and value
    home: homeSlice,
  },
});

// store.jsx must be connnect to main.jsx
