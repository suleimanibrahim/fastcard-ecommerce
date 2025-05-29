import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
    name: "Footer Slice",
    initialState: {
        isFooter: true,
        isNavbar: true,
    },
    reducers: {
        setIsFooter: (state) => {
            state.isFooter = false
            state.isNavbar = true
        },

        setIsNavbar: (state) => {
            state.isNavbar = false
            state.isFooter = true
        }

    },

    
});

export const { setIsNavbar, setIsFooter } = footerSlice.actions;

export default footerSlice.reducer;
