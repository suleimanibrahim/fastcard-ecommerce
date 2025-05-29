import { createSlice } from "@reduxjs/toolkit";

interface shippingAddressProps {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    zip_PostalCode: string,
}

const checkoutSlice = createSlice({
    name: "Checkout Slice",
    initialState: {
        shippingAddress: {} as shippingAddressProps
    },
    reducers: {
        addShippingAddress: (state, action: {payload: shippingAddressProps }) => {
            const {firstName, lastName, email, phoneNumber, address, zip_PostalCode} = action.payload;

            if (action.payload) {
                state.shippingAddress.firstName = firstName;
                state.shippingAddress.lastName = lastName;
                state.shippingAddress.email = email;
                state.shippingAddress.phoneNumber = phoneNumber;
                state.shippingAddress.address = address;
                state.shippingAddress.zip_PostalCode = zip_PostalCode;
            }
        }

    },

    
});

export const { addShippingAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
