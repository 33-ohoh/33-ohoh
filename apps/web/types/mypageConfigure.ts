export type SubPage = {
  className?: string;
  title: string;
  pathname: string;
  selectedIcon: string;
  defaultIcon: string;
};

export enum SubPageType {
  MY_LOG,
  SAVE_LOG,
  RECENT_LOG,
  MY_COMMENTS,
  NONE,
}
