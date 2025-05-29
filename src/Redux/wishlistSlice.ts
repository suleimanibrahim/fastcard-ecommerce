import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface favoriteProductsProps {
    productId: number;
    productName: string;
}

const wishlistSlice = createSlice({
    name: "Wishlist Slice",
    initialState: {
        favoriteProducts: [] as favoriteProductsProps[],
        isSureToRemoveProductFromWishlist: false,
        isSureToClearAllProductsFromWishlist: false,
        productToRemove: [] as favoriteProductsProps[],
        productToRemoveInWishlist: {} as favoriteProductsProps,

    },
    reducers: {
        addProductToFavorite: (
            state,
            action: PayloadAction<favoriteProductsProps>
        ) => {
            const { productId, productName } = action.payload;

            const existingProduct = state.favoriteProducts.find(
                (product) =>
                    product.productId === productId &&
                    product.productName === productName
            );

            if (!existingProduct) {
                state.favoriteProducts.push(action.payload);
            }

            sessionStorage.setItem(
                "favoriteProducts",
                JSON.stringify(state.favoriteProducts)
            );
        },

        removeProductFromFavorite: (
            state,
            action: PayloadAction<favoriteProductsProps>
            ) => {
            const { productId, productName } = action.payload;

            state.favoriteProducts = state.favoriteProducts.filter(
                (product) =>
                    !(
                        product.productId === productId &&
                        product.productName === productName
                    )
            );

            sessionStorage.setItem(
                "favoriteProducts",
                JSON.stringify(state.favoriteProducts)
            );
        },

        clearAllProductsFromFavorite: (state) => {
            state.favoriteProducts = [];
            sessionStorage.removeItem("favoriteProducts");
        },

        setIsSureToRemoveProductFromWishlist: (state, action: {payload: boolean}) => {
            state.isSureToRemoveProductFromWishlist = action.payload;
        },

        setIsSureToClearAllProductsFromWishlist: (state, action: {payload: boolean}) => {
            state.isSureToClearAllProductsFromWishlist = action.payload;
        },

    },

    
});

export const { addProductToFavorite, removeProductFromFavorite, clearAllProductsFromFavorite, setIsSureToRemoveProductFromWishlist, setIsSureToClearAllProductsFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
