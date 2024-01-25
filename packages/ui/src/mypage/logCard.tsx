import * as stylex from "@stylexjs/stylex";
import {
  bodyStyle,
  colors,
  margins,
  radius,
  titleStyle,
} from "../designToken.stylex";

// TODO:: 더미데이터 포켓베이스에 넣어두고, 그거 불러오는 코드 작성하기
const LogCard = () => {
  const logCardData = [
    {
      id: "1",
      username: "홍길동",
      job: "PW, developer",
      bookmark: true,
      title: "개발자가 되고 싶은 이유",
      context:
        "개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문이라고 정말 생각하세요,,,?",
      viewer: "2.1K",
      like: "680",
    },
    {
      id: "2",
      username: "홍길동",
      job: "PW, developer",
      bookmark: true,
      title: "개발자가 되고 싶은 이유",
      context: "개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문...",
      viewer: "2.1K",
      like: "680",
    },
    {
      id: "3",
      username: "길동이",
      job: "PW, developer",
      bookmark: true,
      title: "개발자가 되고 싶은 이유",
      context: "개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문...",
      viewer: "2.1K",
      like: "680",
    },
    {
      id: "4",
      username: "길동이",
      job: "PW, developer",
      bookmark: true,
      title: "개발자가 되고 싶은 이유",
      context: "개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문...",
      viewer: "2.1K",
      like: "680",
    },
    {
      id: "5",
      username: "길동이",
      job: "PW, developer",
      bookmark: true,
      title: "개발자가 되고 싶은 이유",
      context: "개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문...",
      viewer: "2.1K",
      like: "680",
    },
  ];

  let logCardItem = logCardData.map((item) => {
    return (
      <li key={item.id + item.title} {...stylex.props(styles.cardTemplate)}>
        <div {...stylex.props(styles.thumbnailWrap)}>
          <div {...stylex.props(styles.userinfoWrap)}>
            <img src={""} alt={"img"} {...stylex.props(styles.profile)} />
            <div {...stylex.props(styles.profileWrap)}>
              <strong {...stylex.props(bodyStyle.body4M)}>
                {item.username}
              </strong>
              <span {...stylex.props(bodyStyle.body6R)}>{item.job}</span>
            </div>
          </div>
          <button {...stylex.props(styles.badge)}>
            <img src="" alt="" />
          </button>
        </div>

        <div {...stylex.props(styles.contextWrap)}>
          <h4 {...stylex.props(styles.title)}>{item.title}</h4>
          <p {...stylex.props(styles.context)}>{item.context}</p>
          <div {...stylex.props(styles.viewerLikeWrap)}>
            <div {...stylex.props(styles.viewerLike)}>
              <img src="" alt="" />
              <span>{item.viewer}</span>
            </div>
            <div {...stylex.props(styles.viewerLike)}>
              <img src="" alt="" />
              <span>{item.like}</span>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <a href="#" {...stylex.props(styles.layout)}>
      {logCardItem}
    </a>
  );
};

export default LogCard;

const styles = stylex.create({
  layout: {
    display: "flex",
    width: "695px",
    flexWrap: "wrap",
    gap: "50px",
    textDecoration: "none",
  },

  cardTemplate: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.primary50,
    borderRadius: radius.radius15,
    width: "320px",
    height: "300px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  },

  // 전체 색상
  thumbnailWrap: {
    height: "204px",
    padding: "16px 22px",
    background: colors.primary10,
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },

  userinfoWrap: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
    height: "32px",
  },

  profileWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "-2px",
  },

  profile: {
    background: colors.primary90,
    width: "32px",
    height: "32px",
    borderRadius: radius.radius100,
    color: colors.white,
  },

  info: {
    color: colors.white,
  },

  badge: {
    position: "absolute",
    width: "23px",
    height: "30px",
    top: "16px",
    right: "16px",
  },

  contextWrap: {
    height: "96px",
    padding: "16px 20px",
  },

  title: {
    fontSize: titleStyle.headline2,
    marginBottom: margins.extraSmall5,
  },

  context: {
    fontSize: "12px",
    color: colors.neutral50,
    marginBottom: "10px",
    whiteSpace: "nowrap",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  viewerLikeWrap: {
    display: "flex",
    gap: "10px",
  },

  viewerLike: {
    fontSize: bodyStyle.body6R,
    color: colors.neutral50,
    alignItems: "center",
    gap: "5px",
  },
});
