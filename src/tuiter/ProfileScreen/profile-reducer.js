import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {

        saveFunction(state, action) {
            return state = action.payload;
        }
    }
});

export const {saveFunction} = profileSlice.actions;
export default profileSlice.reducer;

