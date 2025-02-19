import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface Declaration
interface IMusicPlayerState {
  isPlaying: boolean;
};

// Set Initial States
const initialState: IMusicPlayerState = {
  isPlaying: false,
};

// Music Player Slice
const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
  }
});

// Export actions and reducers (manage state by toggling action via reducer)
export const { setIsPlaying } = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;