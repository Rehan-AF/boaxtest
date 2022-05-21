import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getNFTs } from "../../HTTP/APIs";

export const getFeaturesNfts = createAsyncThunk(
  "FeaturesNfts/getFeaturesNfts",
  async () => {
    const res = await getNFTs();
    return res;
  }
);
