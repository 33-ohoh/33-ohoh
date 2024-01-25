import React from "react";
import * as stylex from "@stylexjs/stylex";
import { Crown, UpArrowRed } from "../icon";
import {
  titleStyle,
  bodyStyle,
  colors,
  shadows,
  margins,
} from "../designToken.stylex";
interface HotLogCardProps {
  rank: number;
  profile: string;
  id: string;
  job: string;
  title: string;
  preview: string;
  thumbnail: string;
  up: number;
}

const styles = stylex.create({
  profile: {
    display: "flex",
    gap: "0.63rem",
    alignItems: "center",
  },
  profileImage: {
    width: "2rem",
    height: "2rem",
    borderRadius: "100%",
  },
  profileId: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: "0.87rem",
    boxShadow: shadows.light20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 2.1rem 1.5rem 2.1rem",
    gap: "3.8rem",
    marginLeft: "2px",
  },
  cardLeft: {
    width: "13.7rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.4rem",
  },
  thumbnail: {
    width: "9.125rem",
    height: "7.4375rem",
  },
  logText: {
    width: "13.75rem",
  },
  textBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px 0px 10px",
    alignItems: "end",
    marginBottom: margins.extraSmall4,
  },
  neutral80: {
    color: colors.neutral80,
  },
  neutral50: {
    color: colors.neutral50,
  },
  rank: {
    display: "flex",
    alignItems: "end",
    gap: margins.extraSmall3,
  },
  crown: {
    marginBottom: "4px",
  },
  up: {
    display: "flex",
    alignItems: "center",
    gap: "0.31rem",
  },
});
const HotLogCard: React.FC<HotLogCardProps> = ({
  rank,
  profile,
  id,
  job,
  title,
  preview,
  thumbnail,
  up,
}) => {
  return (
    <div>
      <div {...stylex.props(styles.textBox)}>
        <div {...stylex.props(styles.rank)}>
          <span {...stylex.props(titleStyle.display4)}>{rank}위</span>
          {rank === 1 && (
            <span {...stylex.props(styles.crown)}>
              <Crown />
            </span>
          )}
        </div>
        <div {...stylex.props(styles.up)}>
          <p {...stylex.props(bodyStyle.body4M)}>{up} up</p>
          <UpArrowRed />
        </div>
      </div>
      <div {...stylex.props(styles.card)}>
        <div {...stylex.props(styles.cardLeft)}>
          <div {...stylex.props(styles.profile)}>
            <img
              src={profile}
              alt="userProfile"
              {...stylex.props(styles.profileImage)}
            />
            <div {...stylex.props(styles.profileId)}>
              <span {...stylex.props(bodyStyle.body3M, styles.neutral80)}>
                {id}
              </span>
              <span {...stylex.props(bodyStyle.body6R, styles.neutral50)}>
                {job}
              </span>
            </div>
          </div>
          <div {...stylex.props(styles.logText)}>
            <span {...stylex.props(titleStyle.display5B, styles.neutral80)}>
              {title}
            </span>
            <p {...stylex.props(bodyStyle.body4R, styles.neutral50)}>
              {preview}
            </p>
          </div>
        </div>
        <img
          src={thumbnail}
          alt="logThumbnail"
          {...stylex.props(styles.thumbnail)}
        />
      </div>
    </div>
  );
};

export default HotLogCard;
