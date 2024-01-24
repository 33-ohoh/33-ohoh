import { stylex } from "@stylexjs/stylex";
import ProfileBox from "./profileBox.js";

const AsideContainer = () => {
  return (
    <aside {...stylex.props(layoutStyle.asideLayout)}>
      <div {...stylex.props(styles.visitingStatus)}>
        <div>
          Today <span>122</span>
        </div>
        <div>
          Total <span>12240</span>
        </div>
      </div>
      <div {...stylex.props(layoutStyle.innerLayout)}>
        <ProfileBox
          username={"홍길동"}
          profileImage={"/"}
          follow={20}
          follower={120}
        />

        <div>
          <h4>
            <span>이용약관&개인정보처리방침</span>
            <img src={""} alt={""} />
          </h4>
          <h4>
            <span>로그아웃</span>
            <img src={""} alt={""} />
          </h4>
          <h4>
            <span>회원탈퇴</span>
            <img src={""} alt={""} />
          </h4>
        </div>
      </div>
    </aside>
  );
};

export default AsideContainer;

export const layoutStyle = stylex.create({
  wrapper: {
    display: "flex",
    margin: "50px 35px",
  },

  asideLayout: {
    width: "375px",
    position: "relative",
  },

  innerLayout: {
    border: "1px solid blue",
    borderRadius: "15px",
  },
});

export const styles = stylex.create({
  visitingStatus: {
    display: "flex",
  },
});
