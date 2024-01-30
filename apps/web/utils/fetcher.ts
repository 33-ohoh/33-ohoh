
import type { ErrorResponse } from "../types/response";
interface FetcherOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

const fetcher = async <T>(
  url: string,
  options: FetcherOptions = {},

): Promise<T | ErrorResponse | null> => {

  const response = await fetch(url, {
    method: options.method || "GET",
    headers: options.headers || {},
    body: options.body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  const data = await response.json();
  return data;
};

export default fetcher;
