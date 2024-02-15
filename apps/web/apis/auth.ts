import type { LoginFormData, LoginResponse } from "../types/auth";
import type { ErrorResponse, ListResponse } from "../types/response";
import { User } from "../types/user";
import fetcher from "../utils/fetcher";

/* eslint-disable turbo/no-undeclared-env-vars */
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const adminApiUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export const authenticateAdminWithPassword = async (): Promise<
  LoginResponse | ErrorResponse | null
> => {
  try {
    const response = await fetcher<LoginResponse>(
      `${adminApiUrl}/auth-with-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identity: adminEmail, password: adminPassword }),
      },
    );
    return response;
  } catch (error: any) {
    console.error("authenticateWithPassword error:", error.message);
    throw error;
  }
};

export const authenticateWithPassword = async ({
  identity,
  password,
}: LoginFormData): Promise<LoginResponse | ErrorResponse | null> => {
  try {
    const response = await fetcher<LoginResponse>(
      `${apiUrl}/users/auth-with-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identity, password }),
      },
    );
    return response;
  } catch (error: any) {
    console.error("authenticateWithPassword error:", error.message);
    throw error;
  }
};

export const getUsersByFields = async (
  key: string,
  value: string,
): Promise<ListResponse<User> | ErrorResponse | null> => {
  try {
    const response = await fetcher<ListResponse<User>>(
      `${apiUrl}/users/records?filter=(${key}=%27${value}%27)`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error: any) {
    console.error("getUsers error:", error.message);
    throw error;
  }
};

export const createUser = async (
  { name, username, email, password, passwordConfirm, emailVisibility }: User,
  token: string,
) => {
  try {
    const response = await fetcher<User>(`${apiUrl}/users/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        passwordConfirm,
        emailVisibility,
      }),
    });

    return response;
  } catch (error: any) {
    console.error("createUser error:", error.message);
    throw error;
  }
};

export const updateUser = async (id: string, userData: User, token: string) => {
  try {
    const response = await fetcher<User>(`${apiUrl}/users/records/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    return response;
  } catch (error: any) {
    console.error("updateLog error:", error.message);
    throw error;
  }
};

export const usernameDoubleCheck = async (username: string) => {
  try {
    const response = await fetcher<ListResponse<User>>(
      `${apiUrl}/users/records?filter=(username='${username}')`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error: any) {
    console.error("createUser error:", error.message);
    throw error;
  }
};

export const requestVerification = async (
  email?: string,
): Promise<ErrorResponse | null> => {
  try {
    const response = await fetcher<null>(
      `${apiUrl}/users/request-verification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      },
    );
    return response;
  } catch (error: any) {
    console.error("requestVerification error:", error.message);
    throw error;
  }
};

export const requestPasswordReset = async (
  email: string,
): Promise<ErrorResponse | null> => {
  try {
    const response = await fetcher<null>(
      `${apiUrl}/users/request-password-reset`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      },
    );
    return response;
  } catch (error: any) {
    console.error("requestPasswordReset error:", error.message);
    throw error;
  }
};

export const deleteUser = async (
  id: string,
  token: string,
): Promise<ErrorResponse | null> => {
  try {
    const response = await fetcher<null>(`${apiUrl}/users/records/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    console.error("requestPasswordReset error:", error.message);
    throw error;
  }
};
