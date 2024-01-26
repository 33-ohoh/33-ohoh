import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const EditMypageLayout = ({ children }: Props) => {
  return <div {...stylex.props()}>{children}</div>;
};

export default EditMypageLayout;
