export interface User {
  id?: string;
  email?: string;
  name?: string;
  username?: string;
  oldPassword?: string;
  password?: string;
  passwordConfirm?: string;
  emailVisibility?: boolean;
  verified?: boolean;
  termConsents?: string;
  proposalConsents?: string;
  interests?: string[];
}
