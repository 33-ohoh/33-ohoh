import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import {
  bodyStyle,
  colors,
  margins,
  radius,
  titleStyle,
} from "@repo/ui/designToken";
import Image from "next/image";

interface ProfileBoxProps {
  username: string;
  profileImage: string;
  follow: number;
  follower: number;
}

const ProfileBox = ({
  username,
  profileImage,
  follow,
  follower,
}: ProfileBoxProps) => {
  return (
    <div {...stylex.props(styles.profileBox)}>
      <div {...stylex.props(styles.profileImage)}>
        <Image src={profileImage} alt="" />
      </div>
      <strong {...stylex.props(styles.username)}>{username}</strong>

      <Link href="/edit-mypage" {...stylex.props(styles.editButton)}>
        내 프로필 편집
      </Link>

      <div {...stylex.props(styles.followWrap)}>
        <div {...stylex.props(styles.follow)}>
          <p>팔로우</p>
          <span>{follow}</span>
        </div>
        <div {...stylex.props(styles.line)}></div>
        <div {...stylex.props(styles.follow)}>
          <p>팔로워</p>
          <span>{follower}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;

export const styles = stylex.create({
  profileBox: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    alignItems: "center",
    marginBottom: margins.extraSmall2,
  },

  profileImage: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: colors.neutral5,
    marginBottom: "10px",
    overflow: "hidden",
  },

  input: {
    height: "100%",
  },

  username: {
    marginBottom: "30px",
    fontSize: titleStyle.subhead1,
  },

  editButton: {
    width: "100%",
    padding: "12px 0",
    marginBottom: "15px",
    background: colors.primary100,
    borderRadius: radius.radius5,
    color: colors.white,
    textAlign: "center",
    fontSize: bodyStyle.body2M,
    textDecoration: "none",
  },

  followWrap: {
    display: "flex",
    width: "100%",
    borderRadius: radius.radius5,
    background: colors.primary10,
    padding: "10px 0",
    boxSizing: "border-box",
  },

  follow: {
    flexGrow: "1",
    borderStyle: "none",
    padding: "15px 0",
    textAlign: "center",
    fontSize: bodyStyle.body3M,
    fontWeight: bodyStyle.body3M,
    color: colors.primary100,
  },

  line: {
    width: "2px",
    height: "auto",
    background: colors.primary40,
  },
});
