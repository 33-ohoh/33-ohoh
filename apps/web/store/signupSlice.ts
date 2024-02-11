import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SignupData {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  privacyPolicy: boolean;
  termsOfService: boolean;
  collectionAndUse: boolean;
  identification: boolean;
  telCompany: boolean;
  marketing: boolean;
  jobProposal: boolean;
  feedbackProposal: boolean;
  projectProposal: boolean;
  interests: string[];
  usernameVerification: "Unverified" | "InProgress" | "Verified";
  emailVerification: "Unverified" | "InProgress" | "Verified";
  token: string;
}

const signupInitialState: SignupData = {
  id: "",
  name: "",
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  privacyPolicy: false,
  termsOfService: false,
  collectionAndUse: false,
  identification: false,
  telCompany: false,
  marketing: false,
  jobProposal: false,
  feedbackProposal: false,
  projectProposal: false,
  interests: [],
  usernameVerification: "Unverified",
  emailVerification: "Unverified",
  token: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState: signupInitialState,
  reducers: {
    setSignupData: (state, action: PayloadAction<Partial<SignupData>>) => {
      Object.assign(state, action.payload);
    },
    reset: (state) => {
      Object.assign(state, signupInitialState);
    },
  },
});

export const { setSignupData, reset } = signupSlice.actions;
export const selectSignup = (state: { signup: SignupData }) => state.signup;
export default signupSlice.reducer;
