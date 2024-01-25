import * as stylex from "@stylexjs/stylex";
import InfoItem from "@repo/ui/infoItem";
import { bodyStyle, colors, margins, titleStyle } from "@repo/ui/designToken";
import Image from "next/image";

const InfoList = () => {
  const myActivityData = [
    { id: "1", title: "내가 쓴 로그", link: "" },
    { id: "2", title: "관심 로그", link: "" },
    { id: "3", title: "최근 본 로그", link: "" },
    { id: "4", title: "내가 쓴 댓글", link: "" },
  ];

  const companyData = [
    { id: "1", title: "이용약관&개인정보처리방침", link: "" },
    { id: "2", title: "로그아웃", link: "" },
    { id: "3", title: "회원탈퇴", link: "" },
  ];

  const myActivity = myActivityData.map((data) => {
    return (
      <div key={data.id + data.title} {...stylex.props(styles.justifyBetween)}>
        <a
          href={data.link}
          {...stylex.props(styles.noneUnderline, styles.neutral80)}
        >
          {data.title}
        </a>
        <Image src="" alt=">" />
      </div>
    );
  });

  const personalInfoSection = companyData.map((data) => {
    return (
      <h4
        key={data.id + data.title}
        {...stylex.props(styles.justifyBetween, styles.gap20, styles.neutral80)}
      >
        <a
          href={data.link}
          {...stylex.props(styles.noneUnderline, styles.neutral80)}
        >
          {data.title}
        </a>
        <Image src="" alt=">" />
      </h4>
    );
  });

  return (
    <div>
      <InfoItem title="소개">
        <p {...stylex.props(styles.context, styles.mb25)}>
          개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는
          서비스를 만들고 싶습니다.
        </p>
        <p {...stylex.props(styles.context, styles.mb25)}>
          [경력]
          <br />
          Frontend Engineer (2017.03.01 ~ 현재)
        </p>

        <h4 {...stylex.props(styles.mb10)}>SNS 연동</h4>
        <div>
          <Image src="" alt="KO" />
          <Image src="" alt="NA" />
          <Image src="" alt="GO" />
        </div>
      </InfoItem>

      <InfoItem title="활동 로그">
        <div {...stylex.props(styles.activityLog)}>
          <div>
            <strong {...stylex.props(styles.activityTitle)}>1.4K</strong>
            <p {...stylex.props(styles.activityText)}>작업로그</p>
          </div>
          <div>
            <strong {...stylex.props(styles.activityTitle)}>55</strong>
            <p {...stylex.props(styles.activityText)}>답변 수</p>
          </div>
          <div>
            <strong {...stylex.props(styles.activityTitle)}>94</strong>
            <p {...stylex.props(styles.activityText)}>저장된 로그</p>
          </div>
        </div>
      </InfoItem>

      <InfoItem title="나의 활동">
        <div {...stylex.props(styles.gap5)}>{myActivity}</div>
      </InfoItem>

      <InfoItem title="">{personalInfoSection}</InfoItem>
    </div>
  );
};

export default InfoList;

const styles = stylex.create({
  mb10: {
    marginBottom: margins.extraSmall4,
  },

  mb20: {
    marginBottom: margins.extraSmall2,
  },

  mb25: {
    marginBottom: margins.extraSmall1,
  },

  context: {
    fontSize: bodyStyle.body4M,
    lineHeight: bodyStyle.body3R,
  },

  activityLog: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "50px",
  },

  activityTitle: {
    marginBottom: margins.extraSmall5,
    display: "inline-block",
    fontSize: titleStyle.subhead1,
  },

  activityText: {
    fontSize: bodyStyle.body5R,
    color: colors.neutral50,
  },

  gap5: {
    display: "flex",
    gap: margins.extraSmall5,
    flexDirection: "column",
  },

  gap20: {
    marginBottom: margins.extraSmall2,
  },

  justifyBetween: {
    display: "flex",
    justifyContent: "space-between",
    gap: margins.extraSmall5,
  },

  noneUnderline: {
    textDecoration: "none",
  },

  neutral80: {
    color: colors.neutral80,
  },
});
