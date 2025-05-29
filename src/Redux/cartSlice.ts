import { createSlice } from "@reduxjs/toolkit";

interface CartSliceState {
    isSureToRemoveProduct: boolean;
    isSureToClearCart: boolean;
}
const cartSlice = createSlice({
    name: "Cart Slice",
    initialState: {
        isSureToRemoveProduct: false,
        isSureToClearCart: false,
    } as CartSliceState,
    reducers: {
        setIsSureToRemoveProduct: (state: CartSliceState, action: { payload: boolean }) => {
            state.isSureToRemoveProduct = action.payload;
        },
        setIsSureToClearCart: (state: CartSliceState, action: { payload: boolean }) => {
            state.isSureToClearCart = action.payload;
        },
    },
});

export const { setIsSureToRemoveProduct, setIsSureToClearCart } = cartSlice.actions;
export default cartSlice.reducer;