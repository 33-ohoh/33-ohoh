import * as stylex from "@stylexjs/stylex";
import { colors, margins, titleStyle } from "../designToken.stylex";

interface InfoItemProps {
  title: string;
  children?: any;
}

const InfoItem = ({ title, children }: InfoItemProps) => {
  return (
    <div {...stylex.props(styles.border)}>
      <h4 {...stylex.props(styles.title)}>{title}</h4>
      <div>{children}</div>
    </div>
  );
};

export default InfoItem;

const styles = stylex.create({
  title: {
    fontSize: titleStyle.subhead1,
    marginBottom: margins.extraSmall4,
  },

  border: {
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.primary50,
    paddingTop: margins.extraSmall1,
    paddingBottom: margins.extraSmall1,
  },
});
