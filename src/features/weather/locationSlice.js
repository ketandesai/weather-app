import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IP_LOOKUP_URL } from "../../api/config.js";
const initialState = { status: "idle", error: null };

/**
 * Fetches the location based on the browser ip address
 */
export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async () => {
    console.log("fetching location from IP");
    const response = await fetch(IP_LOOKUP_URL);
    return response.json();
  }
);

const locationSlice = createSlice({
  name: "location",
  reducers: {
    locationUpdated(state, action) {
      state.location = action.payload;
      state.status = "success";
      /*const { city, lat, lon } = action.payload;
      const existingPost = state.entities[id];
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }*/
    }
  },
  initialState,
  extraReducers: {
    [fetchLocation.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchLocation.fulfilled]: (state, action) => {
      // Add any fetched posts to the array
      state.location = action.payload;
      state.status = "success";
    },
    [fetchLocation.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const selectLocation = (state) => state.location?.location;
export const selectStatus = (state) => state.location?.status;
export const selectError = (state) => state.location.error;

export const { locationUpdated } = locationSlice.actions;

export default locationSlice.reducer;