import type { User } from "./user";

export interface LoginFormData {
  identity: string | undefined;
  password: string | undefined;
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
