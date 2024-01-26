import * as stylex from "@stylexjs/stylex";
import { margins, radius, titleStyle } from "@repo/ui/designToken";
import Image from "next/image";

interface LogButtonProps {
  icon: string;
  text: string;
  style?: stylex.StyleXStyles;
}

const LogButton = ({ icon, text, style }: LogButtonProps) => {
  return (
    <>
      <button type="button" {...stylex.props(styles.button, style)}>
        <Image src={icon} alt="" />
        <p>{text}</p>
      </button>
    </>
  );
};

export default LogButton;

const styles = stylex.create({
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: margins.extraSmall3,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    borderRadius: radius.radius5,
    borderStyle: "none",
    fontSize: titleStyle.headline2,
    gap: "10px",
  },
});
