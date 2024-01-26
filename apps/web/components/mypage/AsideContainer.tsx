import * as stylex from "@stylexjs/stylex";

import { colors, margins, radius, titleStyle } from "@repo/ui/designToken";
import ProfileBox from "./ProfileBox";
import InfoList from "./InfoList";
import LogButton from "./LogButton";

const AsideContainer = () => {
  return (
    <aside {...stylex.props(styles.asideLayout)}>
      <div {...stylex.props(styles.innerLayout)}>
        <ProfileBox
          username={"홍길동"}
          profileImage={"/"}
          follow={20}
          follower={120}
        />

        <InfoList />

        <div {...stylex.props(styles.buttons)}>
          <LogButton icon="" text="새 로그 작성" style={styles.write} />
          <LogButton icon="" text="내 로그 편집" style={styles.edit} />
        </div>
      </div>
    </aside>
  );
};

export default AsideContainer;

const styles = stylex.create({
  asideLayout: {
    width: "375px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "50px 40px",
    borderWidth: "1px",
    borderRadius: radius.radius15,
    borderStyle: "solid",
    borderColor: colors.primary50,
  },

  innerLayout: {
    width: "300px",
    margin: "0 auto",
  },

  visitingStatus: {
    position: "absolute",
    left: "0",
    display: "flex",
    fontSize: titleStyle.headline2,
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: margins.extraSmall3,
  },

  write: {
    background: colors.primary100,
    color: colors.white,
    borderColor: colors.primary100,
    borderStyle: "solid",
  },

  edit: {
    background: colors.white,
    color: colors.primary80,
    borderColor: colors.primary80,
    borderStyle: "solid",
  },
});
