export interface User {
  id?: string;
  email: string;
  name?: string;
  username?: string;
  password: string;
  passwordConfirm: string;
  emailVisibility?: boolean;
  verified?: boolean;
}
