import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DeleteState {
  isDeleteReply: boolean; // 삭제 아이콘 활성화를 위한 상태
  logPage: number;
}

const initialState: DeleteState = {
  isDeleteReply: false,
  logPage: 1,
};

const deleteLogSlice = createSlice({
  name: "deleteReply",
  initialState,
  reducers: {
    deletedToggle: (state, action: PayloadAction<Partial<DeleteState>>) => {
      Object.assign(state, action.payload);
    },
    logPage: (state, action: PayloadAction<Partial<DeleteState>>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { deletedToggle, logPage } = deleteLogSlice.actions;
export const deleteState = (state: DeleteState) => state.isDeleteReply;
export const replyDeletePage = (state: DeleteState) => state.logPage;
export default deleteLogSlice.reducer;
