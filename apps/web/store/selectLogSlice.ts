import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectLogState {
  isSelectedLogPage: boolean; // 대표설정 버튼의 상태를 활성화 하기 위한 상태
  logPage: number; // 페이지네이션을 위한 상태
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
