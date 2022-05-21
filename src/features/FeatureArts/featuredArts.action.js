import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getNFTbanner } from "../../HTTP/APIs";

export const getFeaturesArtsAction = createAsyncThunk(
  "FeaturesArts/getFeaturesArts",
  async () => {
    const res = await getNFTbanner();

    return res;
  }
);

// nk
