import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectLogState {
  isSelectedLogPage: boolean;
  logPage: number;
}

const initialState: SelectLogState = {
  isSelectedLogPage: false,
  logPage: 1,
};

const selectLogSlice = createSlice({
  name: "selectLog",
  initialState,
  reducers: {
    selectedToggle: (state, action: PayloadAction<Partial<SelectLogState>>) => {
      Object.assign(state, action.payload);
    },
    setLogPage: (state, action: PayloadAction<Partial<SelectLogState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { selectedToggle, setLogPage } = selectLogSlice.actions;
export const selectLog = (state: SelectLogState) => state.isSelectedLogPage;
export default selectLogSlice.reducer;
