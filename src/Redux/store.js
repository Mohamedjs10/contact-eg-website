import { createSlice, configureStore } from "@reduxjs/toolkit";

const mainTabSlice = createSlice({
  name: "mainTab",
  initialState: { mainTab: "افراد" },
  reducers: {
    update(state, action) {
      state.mainTab = action.payload;
    },
  },
});
const secTabSlice = createSlice({
  name: "secTab",
  initialState: { secTab: "A" },
  reducers: {
    update(state, action) {
      state.secTab = action.payload;
    },
  },
});

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    leftOrRightVal: -500,
  },
  reducers: {
    updateMenu: (state, action) => {
      state.leftOrRightVal = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    mainTab: mainTabSlice.reducer,
    secTab: secTabSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export const mainTabActions = mainTabSlice.actions;
export const secTabActions = secTabSlice.actions;
export const { updateMenu } = menuSlice.actions;

export default store;
