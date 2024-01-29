import type { User } from "./user";

export interface LoginFormData {
  identity: string;
  password: string;
}

export interface LoginResponse {
  record: User;
  token: string;
}

export interface signupFormData {
  name?: string;
  username?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  emailVisibility?: boolean;
}
