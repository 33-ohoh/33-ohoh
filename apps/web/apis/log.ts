import type { Log } from "../types/log";
import type { ErrorResponse, ListResponse } from "../types/response";
import fetcher from "../utils/fetcher";

export const getLogs = async (
  url: string,
): Promise<ListResponse<Log> | ErrorResponse | null> => {
  try {
    const response = await fetcher<ListResponse<Log>>(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error: any) {
    console.error("getLogs error:", error.message);
    throw error;
  }
};


export const getLog = async (
  url: string,
): Promise<Log | ErrorResponse | null> => {
  try {
    const response = await fetcher<Log>(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error: any) {
    console.error("getLog error:", error.message);
    throw error;
  }
};

export const createLog = async (
  url: string,
  { arg: { logData, token } }: { arg: { logData: Log; token: string } },
): Promise<Log | ErrorResponse | null> => {
  try {
    const response = await fetcher<Log>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(logData),
    });
    return response;
  } catch (error: any) {
    console.error("createLog error:", error.message);
    throw error;
  }
};

export const updateLog = async (
  url: string,
  { arg: { logData, token } }: { arg: { logData: Log; token: string } },
) => {
  try {
    const response = await fetcher<Log>(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(logData),
    });
    return response;
  } catch (error: any) {
    console.error("updateLog error:", error.message);
    throw error;
  }
};

export const deleteLog = async (
  url: string,
  { arg: { token } }: { arg: { token: string } },
) => {
  try {
    const response = await fetcher(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error: any) {
    console.error("deleteLog error:", error.message);
    throw error;
  }
};
