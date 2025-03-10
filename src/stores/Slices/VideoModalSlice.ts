import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface Declaration
interface IVideoModalState {
  isModalOpen: boolean;
  video: string;
}

// Set Initial States
const initialState: IVideoModalState = {
  isModalOpen: false,
  video: "",
};

// Video Modal Slice
const videoModalSlice = createSlice({
  name: "videoModal",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setVideo: (state, action: PayloadAction<string>) => {
      state.video = action.payload;
    },
  },
});

// Export actions and reducers (manage state by toggling action via reducer)
export const { setModalOpen, setVideo } = videoModalSlice.actions;
export default videoModalSlice.reducer;
