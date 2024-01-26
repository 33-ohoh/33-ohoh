import * as stylex from "@stylexjs/stylex";
import LogCard from "./logCard";

const MainContainer = () => {
  const interestLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  return (
    <main>
      <h3 {...stylex.props(styles.subTitle)}>관심로그</h3>
      <div {...stylex.props(styles.buttonWrap)}>
        {interestLogChip.map((logChip) => (
          <button type="button" {...stylex.props(styles.chipButton)}>
            {logChip}
          </button>
        ))}
      </div>
      <ul>
        <LogCard />
      </ul>
    </main>
  );
};

export default MainContainer;

const styles = stylex.create({
  subTitle: {
    marginBottom: "25px",
  },

  buttonWrap: {
    display: "flex",
    gap: "10px",
    marginBottom: "50px",
  },

  chipButton: {
    padding: "10px 22px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#196AFF",
    borderRadius: "100px",
    background: "white",
  },
});
