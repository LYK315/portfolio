import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./Slices/MusicPlayerSlice";

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;