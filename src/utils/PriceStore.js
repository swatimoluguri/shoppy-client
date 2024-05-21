import { createSlice } from "@reduxjs/toolkit";

const PriceSlice = createSlice({
  name: "price",
  initialState: {
    price: "",
  },
  reducers: {
    addPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export default PriceSlice.reducer;
export const { addPrice } = PriceSlice.actions;
