import { createSlice } from "@reduxjs/toolkit";
import { getFeaturesNfts } from "./featuredArts.action";
const initialState = {
  featuresNFTs: [],
  FeaturesArtsloading: false,
  FeaturesArtsloadedSuccess: false,
  FeaturesArtsloadedFailed: false,
};

const FeaturesNftsSlicer = createSlice({
  name: "FeaturesNfts",
  initialState,

  extraReducers: {
    [getFeaturesNfts.pending]: (state, action) => {
      state.FeaturesArtsloading = true;
      state.FeaturesArtsloadedSuccess = false;
      state.FeaturesArtsloadedFailed = false;
    },
    [getFeaturesNfts.fulfilled]: (state, action) => {
      state.FeaturesArtsloading = false;
      state.FeaturesArtsloadedSuccess = true;
      state.featuresNFTs = action.payload;
    },
    [getFeaturesNfts.rejected]: (state, action) => {
      state.FeaturesArtsloading = false;
      state.FeaturesArtsloadedFailed = true;
    },
  },
});

export default FeaturesNftsSlicer.reducer;
