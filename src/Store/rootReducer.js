import { combineReducers } from "@reduxjs/toolkit";
import FeaturesArtsSlicer from "../features/FeatureArts/featuredArts.slicer";
import FeaturesNftsSlicer from "../features/FeaturesNft/featuredArts.slicer";
const rootReducer = combineReducers({
  FeaturesArtsSlicer: FeaturesArtsSlicer,
  FeaturesNftsSlicer: FeaturesNftsSlicer,
});

export default rootReducer;
