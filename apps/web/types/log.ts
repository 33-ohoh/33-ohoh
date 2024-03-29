// 실제 로그 데이터에 맞게 추가 필요
export interface Log {
  id: string;
  title: string;
  thumbnail: string;
  expand: {
    user: {
      name: string;
      myJob: string;
    };
  };
  content: string;
  hitCount: number;
  likeCount: number;
  commentCount: number;
  collectionId: string;
  isBookmark?: boolean;
}

export interface LogsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: Log[];
}
