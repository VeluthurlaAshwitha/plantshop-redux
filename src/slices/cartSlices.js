import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0
};

const recalc = (state) => {
  let c = 0, p = 0;
  Object.values(state.items).forEach(it => {
    c += it.qty;
    p += it.qty * it.price;
  });
  state.totalCount = c;
  state.totalPrice = p;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const p = action.payload;
      if (state.items[p.id]) return;
      state.items[p.id] = { ...p, qty: 1 };
      recalc(state);
    },
    increase: (state, action) => {
      state.items[action.payload].qty++;
      recalc(state);
    },
    decrease: (state, action) => {
      const id = action.payload;
      state.items[id].qty--;
      if (state.items[id].qty === 0) delete state.items[id];
      recalc(state);
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
      recalc(state);
    }
  }
});

export const { addItem, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
