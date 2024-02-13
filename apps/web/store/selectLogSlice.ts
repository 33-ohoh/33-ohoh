import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectState {
  isSelectedLogPage: boolean; // 대표설정 버튼의 상태를 활성화 하기 위한 상태
  logPage: number; // 페이지네이션을 위한 상태
  replyPage: number;
}

const initialState: SelectState = {
  isSelectedLogPage: false,
  logPage: 1,
  replyPage: 1,
};

const selectLogSlice = createSlice({
  name: "selectLog",
  initialState,
  reducers: {
    selectedToggle: (state, action: PayloadAction<Partial<SelectState>>) => {
      Object.assign(state, action.payload);
    },
    setPage: (state, action: PayloadAction<Partial<SelectState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { selectedToggle, setPage } = selectLogSlice.actions;
export const selectState = (state: SelectState) => state.isSelectedLogPage;
export const replyPage = (state: SelectState) => state.replyPage;
export const logPage = (state: SelectState) => state.logPage;
export default selectLogSlice.reducer;
