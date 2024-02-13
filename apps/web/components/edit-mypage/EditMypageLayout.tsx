import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EditMypageLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default EditMypageLayout;
