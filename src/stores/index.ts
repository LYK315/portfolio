import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./Slices/MusicPlayerSlice";
import videoModalReducer from "./Slices/VideoModalSlice";

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
    videoModal: videoModalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;