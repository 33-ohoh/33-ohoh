export interface HotLogCardProps {
  currentRank: number;
  previousRank?: number | undefined;
  title: string;
  content: string;
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
  id: string;
  collectionId: string;
}
