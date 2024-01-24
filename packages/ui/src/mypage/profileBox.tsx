"use client";

import React from "react";
import * as stylex from "@stylexjs/stylex";
// import Link from "next/link";

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
      <button {...stylex.props(styles.profileImage)}>
        <img src={profileImage} />
      </button>
      <strong {...stylex.props(styles.username)}>{username}</strong>

      {/* <Link href="/edit-mypage" {...stylex.props(styles.editButton)}>
				내 프로필 편집
			</Link> */}

      <div {...stylex.props(styles.buttonWrap)}>
        <button {...stylex.props(styles.button)}>
          <p>팔로우</p>
          <span>{follow}</span>
        </button>
        <button {...stylex.props(styles.button)}>
          <p>팔로워</p>
          <span>{follower}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileBox;

export const styles = stylex.create({
  profileBox: {
    background: "#eee",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    alignItems: "center",
    margin: "50px 0",
  },

  profileImage: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "#ddd",
    marginBottom: "10px",
    border: "none",
    overflow: "hidden",
  },

  input: {
    height: "100%",
  },

  username: {
    marginBottom: "30px",
  },

  editButton: {
    width: "100%",
    padding: "12px 0",
    marginBottom: "15px",
  },

  buttonWrap: {
    display: "flex",
    width: "100%",
  },

  button: {
    flexGrow: "1",
    borderRadius: "5px",
    border: "none",
    background: "#ddd",
  },
});
