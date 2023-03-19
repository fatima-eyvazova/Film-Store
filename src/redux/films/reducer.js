import { createSlice } from "@reduxjs/toolkit";
const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        currentFilm: null
    },
    reducers: {
        setCurrentFilm: (state, action) => {
            state.currentFilm = action.payload
        },
    }
});

export const { setCurrentFilm } = filmsSlice.actions;
export default filmsSlice.reducer;