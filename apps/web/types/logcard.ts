export interface LogCardProps {
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
}
