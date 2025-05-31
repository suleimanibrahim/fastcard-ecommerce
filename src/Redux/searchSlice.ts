import { createSlice } from "@reduxjs/toolkit";

interface ProductType {
    id: number;
    name: string;
    Desc: string;
    category: string;
    subCategory?: string;
    img: string;
    availableColors: string[];
    After_Discount: number;
    Pre_Discount: number | null;
    quantity: string | null;
    imgHover: string;
    video: string;
  }

const searchSlice = createSlice({
  name: "search",
    initialState: {
        isSearchOpen: false,
        searchResults: [] as ProductType[]
    },
    reducers: {
        setIsSearchOpen: (state, action: { payload: boolean }) => {
            state.isSearchOpen = action.payload;
        },

        addSearchResults: (state, action: { payload: ProductType[] }) => {
            state.searchResults = (action.payload);

            console.log(state.searchResults);
        }
    }
});
export const { setIsSearchOpen, addSearchResults } = searchSlice.actions;
export default searchSlice.reducer;