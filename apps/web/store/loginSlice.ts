import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginData {
  email: string;
  password: string;
  token: string;
  rememberUser: boolean;
  isLoggedIn: boolean;
}

const loginInitialState: LoginData = {
  email: "",
  password: "",
  token: "",
  rememberUser: false,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<Partial<LoginData>>) => {
      Object.assign(state, action.payload);
    },
    login: (state, action: PayloadAction<LoginData>) => {
      state = { ...state, ...action.payload, isLoggedIn: true };
    },
    logout: () => loginInitialState,
  },
});

export const { setLoginData, login, logout } = loginSlice.actions;
export const selectLogin = (state: { login: LoginData }) => state.login;
export default loginSlice.reducer;
