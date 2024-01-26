//실제 로그 데이터에 맞게 추가 필요
export interface Log {
  id: string;
  title: string;
}

export interface LogsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: Log[];
}
