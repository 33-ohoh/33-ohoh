export interface LogCardProps {
  id: string;
  title: string;
  thumbnail: string;
  expand: {
    user: {
      collectionId: string;
      name: string;
      myJob: string;
      avatar: string;
      id: string;
    };
  };
  content: string;
  hitCount: number;
  likeCount: number;
  commentCount: number;
  collectionId: string;
}
