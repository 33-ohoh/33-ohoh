export interface ErrorResponse {
  code: number;
  message: string;
  data: {
    [key: string]: { code: string; message: string } | null;
  };
}

export interface ListResponse<T> {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
}
