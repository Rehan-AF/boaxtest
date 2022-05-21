import { createSlice } from "@reduxjs/toolkit";
import { getFeaturesArtsAction } from "./featuredArts.action";
const initialState = {
  featuresArts: [],
  FeaturesArtsloading: false,
  FeaturesArtsloadedSuccess: false,
  FeaturesArtsloadedFailed: false,
};

const FeaturesArtsSlicer = createSlice({
  name: "FeaturesNfts",
  initialState,

  extraReducers: {
    [getFeaturesArtsAction.pending]: (state, action) => {
      state.FeaturesArtsloading = true;
      state.FeaturesArtsloadedSuccess = false;
      state.FeaturesArtsloadedFailed = false;
    },
    [getFeaturesArtsAction.fulfilled]: (state, action) => {
      state.FeaturesArtsloading = false;
      state.FeaturesArtsloadedSuccess = true;
      state.featuresArts = action.payload;
    },
    [getFeaturesArtsAction.rejected]: (state, action) => {
      state.FeaturesArtsloading = false;
      state.FeaturesArtsloadedFailed = true;
    },
  },
});

export default FeaturesArtsSlicer.reducer;
