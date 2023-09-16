import { createSlice } from "@reduxjs/toolkit";
import {
    updateCurrentPage,
    updateResultsPerPage,
    updateAllCurrentPage as updateAllCurrentPageReducer,
} from "./reducers";
import { updateAllCurrentPage } from "./actions";

const createSearchAppSlice = ({
    name,
    initialState,
    reducers,
    extraReducers,
}) => {
    // Setup a default state, and allow the function arg to change the defaults.
    initialState = {
        currentPage: 1,
        resultsPerPage: 10,
        ...initialState,
    };

    return createSlice({
        name,
        initialState,
        reducers: {
            // The first reducer is a utility to resets the state.
            reset: () => ({ ...initialState }),
            // Our reusable reducers.
            updateCurrentPage,
            updateResultsPerPage,
            // Then pass through any custom reducers specific to this slice.
            ...reducers,
        },
        // extraReducers are global reducers that apply to all slices in the store.
        // We'll come back to these later.
        extraReducers,
    });
};

export const globalSearchSlice = createSearchAppSlice({
    name: "globalSearch",
    extraReducers: {
        [updateAllCurrentPage]: updateAllCurrentPageReducer,
    },
});

export const imageSearchSlice = createSearchAppSlice({
    name: "imageSearch",
    initialState: {
        resultsPerPage: 20,
    },
    extraReducers: {
        [updateAllCurrentPage]: updateAllCurrentPageReducer,
    },
});
