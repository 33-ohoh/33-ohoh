import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SaveLogState {
  isSaveLogState: boolean;
  logPage: number; // 페이지네이션을 위한 상태
}

const initialState: SaveLogState = {
  isSaveLogState: true,
  logPage: 1,
};

export const saveLogSlice = createSlice({
  name: "saveLog",
  initialState,
  reducers: {
    saveStateToggle: (state, action: PayloadAction<Partial<SaveLogState>>) => {
      Object.assign(state, action.payload);
    },
    setSavePage: (state, action: PayloadAction<Partial<SaveLogState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { saveStateToggle, setSavePage } = saveLogSlice.actions;
export const saveLog = (state: SaveLogState) => state.isSaveLogState;
export default saveLogSlice.reducer;
