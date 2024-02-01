import { SVGProps } from "react";

export const IconArrowMenu = ({ fill, className }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M10.175 18.5793C9.95844 18.5797 9.74858 18.5043 9.58185 18.3661C9.488 18.2883 9.41043 18.1928 9.35357 18.085C9.29672 17.9771 9.26169 17.8591 9.2505 17.7378C9.2393 17.6164 9.25217 17.494 9.28835 17.3776C9.32454 17.2612 9.38333 17.153 9.46137 17.0594L13.6133 12.0919L9.60965 7.11523C9.53267 7.02044 9.47518 6.91136 9.44049 6.79427C9.4058 6.67719 9.39459 6.5544 9.40751 6.43297C9.42043 6.31154 9.45722 6.19385 9.51576 6.08669C9.57431 5.97952 9.65346 5.88498 9.74866 5.8085C9.84455 5.72413 9.95685 5.66049 10.0785 5.62158C10.2001 5.58266 10.3285 5.56931 10.4556 5.58237C10.5826 5.59542 10.7056 5.63459 10.8168 5.69743C10.928 5.76027 11.025 5.84541 11.1017 5.94751L15.578 11.5081C15.7143 11.6739 15.7888 11.8819 15.7888 12.0966C15.7888 12.3112 15.7143 12.5192 15.578 12.6851L10.9442 18.2457C10.8512 18.3578 10.7331 18.4465 10.5995 18.5044C10.4658 18.5624 10.3204 18.588 10.175 18.5793Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const IconPlus = ({ stroke }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.96094V19.9609"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 12.9609H19"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const IconEdit = ({ fill }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill={fill}
      viewBox="0 0 22 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4717 3.14127L18.7092 4.32252C19.4333 5.00502 19.4333 6.11627 18.7092 6.79877L6.58167 18.375H2.75V14.7175L12.2833 5.60877L14.8775 3.14127C15.5925 2.45877 16.7567 2.45877 17.4717 3.14127ZM4.58333 16.625L5.87583 16.6775L14.8775 8.07627L13.585 6.84252L4.58333 15.435V16.625Z"
        fill={fill}
      />
    </svg>
  );
};

export const IconBookmark = ({ fill, stroke }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fill_mark 1" clipPath="url(#clip0_89_10154)">
        <path
          id="Vector"
          d="M8.93613 14.1814L8.9361 14.1814C8.36528 13.785 7.63473 13.785 7.0639 14.1814L7.06387 14.1814L1.08053 18.3366C1.03782 18.3662 1.01216 18.3678 1.0007 18.3677C0.985585 18.3675 0.958368 18.3627 0.922386 18.3385C0.849927 18.2899 0.75 18.1622 0.75 17.9394V1.17647C0.75 1.02191 0.803507 0.901894 0.864348 0.830316C0.923832 0.760335 0.974393 0.75 1 0.75H15C15.0256 0.75 15.0762 0.760338 15.1357 0.830314C15.1965 0.901888 15.25 1.0219 15.25 1.17647V17.9394C15.25 18.1622 15.1501 18.2899 15.0776 18.3385C15.0416 18.3627 15.0144 18.3675 14.9993 18.3677C14.9879 18.3678 14.9622 18.3662 14.9195 18.3366L14.4917 18.9526L14.9195 18.3366L8.93613 14.1814Z"
          fill={fill}
          stroke={stroke}
          stroke-width="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_89_10154">
          <rect width="16" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconHeart = ({
  width,
  height,
  fill,
  stroke,
}: SVGProps<SVGAElement>) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="heart full">
        <path
          id="Vector"
          d="M4.95234 7.29112L4.95125 7.29016C3.97017 6.42826 3.21796 5.76523 2.70198 5.15407C2.19381 4.55216 2 4.0971 2 3.66469C2 2.98214 2.54914 2.4165 3.3125 2.4165C3.61151 2.4165 3.90902 2.51122 4.15576 2.67622C4.65881 3.01261 5.34119 3.01261 5.84424 2.67622C6.09098 2.51122 6.38849 2.4165 6.6875 2.4165C7.45086 2.4165 8 2.98214 8 3.66469C8 4.09712 7.80619 4.5522 7.29786 5.15472C6.78185 5.76633 6.02983 6.43005 5.04898 7.29358C5.04871 7.29383 5.04843 7.29407 5.04815 7.29432L5.00188 7.33481L4.95234 7.29112Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="0.8"
        />
      </g>
    </svg>
  );
};

export const IconViewer = ({ width, height, fill }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="eyes">
        <path
          id="Vector"
          d="M6 3.5C4.45275 3.5 2.73565 4.32581 1.87058 5.5639C1.58272 5.97588 1.58272 6.52412 1.87058 6.9361C2.73565 8.17419 4.45275 9 6 9C7.54725 9 9.26435 8.17419 10.1294 6.9361C10.4173 6.52412 10.4173 5.97588 10.1294 5.5639C9.26435 4.32581 7.54725 3.5 6 3.5ZM6 8.08333C4.99636 8.08333 4.18182 7.262 4.18182 6.25C4.18182 5.238 4.99636 4.41667 6 4.41667C7.00364 4.41667 7.81818 5.238 7.81818 6.25C7.81818 7.262 7.00364 8.08333 6 8.08333ZM6 5.15C5.39636 5.15 4.90909 5.64133 4.90909 6.25C4.90909 6.85867 5.39636 7.35 6 7.35C6.60364 7.35 7.09091 6.85867 7.09091 6.25C7.09091 5.64133 6.60364 5.15 6 5.15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const IconComment = ({ width, height, fill }: SVGProps<SVGAElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chat">
        <path
          id="Vector"
          d="M8.9803 8.12004L8.70107 7.9211C8.63246 8.01737 8.61828 8.14217 8.66359 8.25138L8.9803 8.12004ZM8.11758 8.98208L8.23858 8.6613C8.13175 8.62098 8.01189 8.63652 7.91881 8.70267L8.11758 8.98208ZM9.56402 9.52786L9.44297 9.84864C9.57088 9.89691 9.71524 9.86455 9.81033 9.76635C9.90546 9.66816 9.93312 9.52283 9.88073 9.39652L9.56402 9.52786ZM9.31428 6C9.31428 6.71666 9.08722 7.37925 8.70107 7.9211L9.25952 8.31904C9.72571 7.66487 10 6.86395 10 6H9.31428ZM6 2.68571C7.83044 2.68571 9.31428 4.16957 9.31428 6H10C10 3.79086 8.20914 2 6 2V2.68571ZM2.68571 6C2.68571 4.16957 4.16957 2.68571 6 2.68571V2C3.79086 2 2 3.79086 2 6H2.68571ZM6 9.31428C4.16957 9.31428 2.68571 7.83044 2.68571 6H2C2 8.20914 3.79086 10 6 10V9.31428ZM7.91881 8.70267C7.37737 9.08786 6.71566 9.31428 6 9.31428V10C6.86272 10 7.66263 9.72649 8.3163 9.26144L7.91881 8.70267ZM9.68507 9.20708L8.23858 8.6613L7.99652 9.30286L9.44297 9.84864L9.68507 9.20708ZM8.66359 8.25138L9.24731 9.6592L9.88073 9.39652L9.297 7.98875L8.66359 8.25138Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const IconArrowDropDown = ({
  width,
  height,
  stroke,
}: SVGProps<SVGAElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9999 12L2 2"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M11 12L19.9999 2"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const IconCrown = () => (
  <svg
    width="43"
    height="34"
    viewBox="0 0 43 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.7674 12.0474L7.72859 26.031C7.84388 26.5754 8.33468 26.9659 8.90371 26.9659H34.5158C35.0998 26.9659 35.5991 26.555 35.6983 25.9926L38.171 11.9805C38.3285 11.0881 37.435 10.3656 36.5671 10.6836L29.7414 13.1844C29.2553 13.3625 28.7072 13.2151 28.383 12.819L22.6267 5.78905C22.1584 5.21708 21.2739 5.20007 20.7829 5.7536L14.4732 12.8667C14.1446 13.2371 13.6148 13.3687 13.145 13.1966L6.36386 10.7121C5.47924 10.388 4.57598 11.1435 4.7674 12.0474Z"
      fill="#FFD914"
    />
    <path
      d="M6.72659 28.1379C6.72659 27.4903 7.26385 26.9654 7.92659 26.9654H35.5266C36.1894 26.9654 36.7266 27.4903 36.7266 28.1379V32.8276C36.7266 33.4751 36.1893 34 35.5266 34H7.92659C7.26384 34 6.72659 33.4751 6.72659 32.8276V28.1379Z"
      fill="#F4BF01"
    />
    <path
      d="M6.72657 8.79211C6.72657 10.4109 5.38342 11.7232 3.72656 11.7232C2.06971 11.7232 0.726562 10.4109 0.726562 8.79211C0.726562 7.17332 2.06971 5.86104 3.72656 5.86104C5.38342 5.86104 6.72657 7.17332 6.72657 8.79211Z"
      fill="#F4BF01"
    />
    <path
      d="M24.7266 2.93107C24.7266 4.54986 23.3834 5.86215 21.7266 5.86215C20.0697 5.86215 18.7266 4.54986 18.7266 2.93107C18.7266 1.31229 20.0697 0 21.7266 0C23.3834 0 24.7266 1.31229 24.7266 2.93107Z"
      fill="#F4BF01"
    />
    <path
      d="M42.7266 8.79211C42.7266 10.4109 41.3834 11.7232 39.7266 11.7232C38.0697 11.7232 36.7266 10.4109 36.7266 8.79211C36.7266 7.17332 38.0697 5.86104 39.7266 5.86104C41.3834 5.86104 42.7266 7.17332 42.7266 8.79211Z"
      fill="#F4BF01"
    />
  </svg>
);

export const IconFix = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4762 17.9921C16.3616 18.3799 16.1996 18.761 15.988 19.1274L10.4453 15.9273L7.8886 20.3556C7.71914 20.6491 7.34913 20.7527 7.06216 20.5871C6.77518 20.4214 6.67991 20.0491 6.84937 19.7556L9.40606 15.3273L3.86368 12.1274C4.07521 11.761 4.32425 11.4301 4.60284 11.137C5.9534 9.71589 7.99862 9.18153 9.83351 9.78735L11.4188 7.04159C10.4622 6.4893 10.1446 5.24848 10.7095 4.27013C11.2743 3.29179 12.5077 2.9464 13.4643 3.49868L18.6604 6.49868C19.617 7.05097 19.9346 8.29179 19.3697 9.27013C18.8049 10.2485 17.5715 10.5939 16.6149 10.0416L15.0297 12.7874C16.4718 14.0735 17.0316 16.1119 16.4762 17.9921Z"
      fill="#7FACFF"
    />
  </svg>
);

export const IconHambugerMenu = ({ fill }: SVGProps<SVGAElement>) => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0.777778C0 0.348227 0.307008 0 0.685714 0H15.3143C15.693 0 16 0.348227 16 0.777778C16 1.20734 15.693 1.55556 15.3143 1.55556H0.685714C0.307008 1.55556 0 1.20733 0 0.777778Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7C0 6.57046 0.307008 6.22222 0.685714 6.22222H15.3143C15.693 6.22222 16 6.57046 16 7C16 7.42954 15.693 7.77778 15.3143 7.77778H0.685714C0.307008 7.77778 0 7.42954 0 7Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 13.2222C0 12.7927 0.307008 12.4444 0.685714 12.4444H15.3143C15.693 12.4444 16 12.7927 16 13.2222C16 13.6518 15.693 14 15.3143 14H0.685714C0.307008 14 0 13.6518 0 13.2222Z"
      fill={fill}
    />
  </svg>
);

export const IconRegistTemplate = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21"
      cy="21"
      r="20"
      fill="#E5EEFF"
      stroke="#196AFF"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M21 9.91699V30.3337"
      stroke="#196AFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10.5 20.125H31.5"
      stroke="#196AFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Search = ({ fill }: SVGProps<SVGAElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7ZM11.3649 12.4728C10.1681 13.4286 8.65076 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.67487 13.4118 10.2124 12.4307 11.4171L15.5916 14.5321C15.8845 14.825 15.8845 15.2999 15.5916 15.5928C15.2987 15.8857 14.8238 15.8857 14.5309 15.5928L11.3649 12.4728Z"
      fill={fill}
    />
  </svg>
);

export const IconX = ({ fill }: SVGProps<SVGAElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.20934 4.20749C4.93268 3.93084 4.48415 3.93084 4.2075 4.20749C3.93084 4.48413 3.93084 4.93268 4.2075 5.20933L10.9982 12L4.20749 18.7906C3.93084 19.0673 3.93084 19.5158 4.20749 19.7925C4.48414 20.0692 4.93268 20.0692 5.20933 19.7925L12 13.0018L18.7907 19.7925C19.0674 20.0692 19.5158 20.0692 19.7925 19.7925C20.0692 19.5158 20.0692 19.0673 19.7925 18.7906L13.0019 12L19.7925 5.20934C20.0692 4.93269 20.0692 4.48414 19.7925 4.2075C19.5158 3.93085 19.0674 3.93085 18.7907 4.2075L12 10.9981L5.20934 4.20749Z"
      fill={fill}
    />
  </svg>
);

export const LogoVer1 = () => (
  <svg
    width="71"
    height="19"
    viewBox="0 0 71 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M6.18837 0.376953H18.2989V12.7103H6.13885C2.75105 12.7103 -0.00195312 9.95732 -0.00195312 6.56953C-0.00195312 3.15247 2.77131 0.376953 6.18837 0.376953Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M12.158 18.876L-0.00201225 18.876V6.54261L12.1085 6.54261C15.5256 6.54486 18.2988 9.31812 18.2988 12.7352C18.2988 16.1252 15.5458 18.876 12.158 18.876Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M28.0823 0.376953H21.0186V18.8759H28.0823V0.376953Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M39.3149 0.376953H21.0186V5.80193H39.3149V0.376953Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M35.1482 7.86816H21.0186V13.2031H35.1482V7.86816Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M36.5146 18.8759H45.7123V0.376953L36.5146 18.8759Z"
      fill="#0059FF"
    />
    <path
      opacity="0.72"
      d="M45.7119 18.8759H54.9119L45.7119 0.376953V18.8759Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M57.7679 16.3215C59.4404 17.931 61.7072 18.9237 64.2103 18.9237C66.8935 18.9237 69.3044 17.7802 71.0017 15.9614L64.5637 9.52344L57.7656 16.3215H57.7679Z"
      fill="#0059FF"
    />
    <path
      opacity="0.5"
      d="M64.2097 0.326172C61.7583 0.326172 59.5343 1.28286 57.873 2.83381L64.5653 9.52611L70.9087 3.18272C69.216 1.42467 66.8434 0.326172 64.2119 0.326172L64.2097 0.326172Z"
      fill="#0059FF"
    />
    <path
      opacity="0.72"
      d="M57.8735 2.83428C56.0547 4.53156 54.9111 6.9424 54.9111 9.62563C54.9111 12.3089 56.0096 14.6319 57.7677 16.3224L64.5658 9.52433L57.8735 2.83203V2.83428Z"
      fill="#0059FF"
    />
  </svg>
);

export const LogoVer2 = () => (
  <svg
    width="80"
    height="40"
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.56796 26.7696C2.44331 26.7696 0 25.072 0 22.9035C0 22.5607 0.290766 22.284 0.650969 22.284H1.70988C2.07008 22.284 2.36085 22.5607 2.36085 22.9035C2.36085 23.7668 3.86242 24.5227 5.5723 24.5227C7.28218 24.5227 8.78375 23.7668 8.78375 22.9035C8.78375 22.2179 7.10859 21.7099 5.62872 21.2638C3.33296 20.5657 0.473038 19.7025 0.455679 17.3233C0.455679 15.1879 2.75143 13.4531 5.57664 13.4531C8.40184 13.4531 10.6976 15.1879 10.6976 17.3192C10.6976 17.662 10.4068 17.9388 10.0466 17.9388H8.98772C8.62751 17.9388 8.33675 17.662 8.33675 17.3192C8.33675 16.4394 7.07387 15.7001 5.57664 15.7001C4.07941 15.7001 2.81653 16.4436 2.81653 17.3192C2.81653 17.9883 4.49603 18.5046 5.98024 18.9549C8.28901 19.6612 11.162 20.5368 11.1446 22.9118C11.1446 25.0762 8.69695 26.7738 5.57664 26.7738L5.56796 26.7696Z"
      fill="#030303"
    />
    <path
      d="M14.741 26.7349C14.3808 26.7349 14.09 26.4582 14.09 26.1153V15.6612H12.6275C12.2673 15.6612 11.9766 15.3845 11.9766 15.0417V14.0338C11.9766 13.691 12.2673 13.4143 12.6275 13.4143H14.1638C14.4893 10.2338 16.2556 8.35449 18.9767 8.35449H19.5061C19.8663 8.35449 20.1571 8.63123 20.1571 8.97406V9.98188C20.1571 10.3247 19.8663 10.6014 19.5061 10.6014H18.9767C17.2755 10.6014 16.7243 12.2495 16.5507 13.4143H19.5061C19.8663 13.4143 20.1571 13.691 20.1571 14.0338V15.0417C20.1571 15.3845 19.8663 15.6612 19.5061 15.6612H16.4552V26.1153C16.4552 26.4582 16.1645 26.7349 15.8043 26.7349H14.7454H14.741Z"
      fill="#030303"
    />
    <path
      d="M31.228 26.7696C30.8678 26.7696 30.5771 26.4929 30.5771 26.1501V25.2538C29.4314 26.2203 27.9819 26.7696 26.4673 26.7696C22.9 26.7696 20.001 23.7833 20.001 20.1114C20.001 16.4394 22.9043 13.4531 26.4673 13.4531C27.9819 13.4531 29.4314 14.0025 30.5771 14.969V14.0727C30.5771 13.7299 30.8678 13.4531 31.228 13.4531H32.2869C32.6471 13.4531 32.9379 13.7299 32.9379 14.0727V26.1542C32.9379 26.497 32.6471 26.7738 32.2869 26.7738H31.228V26.7696ZM26.4673 15.6959C24.2019 15.6959 22.3575 17.6744 22.3575 20.1114C22.3575 22.5483 24.2019 24.5268 26.4673 24.5268C28.7326 24.5268 30.5771 22.5483 30.5771 20.1114C30.5771 17.6744 28.7326 15.6959 26.4673 15.6959Z"
      fill="#030303"
    />
    <path
      d="M50.6016 8.35449H49.5589C49.2049 8.35449 48.918 8.62479 48.918 8.95821V26.1239C48.918 26.4573 49.2049 26.7276 49.5589 26.7276H50.6016C50.9556 26.7276 51.2426 26.4573 51.2426 26.1239V8.95821C51.2426 8.62479 50.9556 8.35449 50.6016 8.35449Z"
      fill="#030303"
    />
    <path
      d="M72.9726 31.6418C72.6124 31.6418 72.3217 31.365 72.3217 31.0222V30.0144C72.3217 29.6716 72.6124 29.3948 72.9726 29.3948H73.5021C75.9931 29.3742 77.5859 27.2718 77.5859 25.8385V25.4461C76.4401 26.4127 74.9907 26.962 73.4761 26.962C69.9088 26.962 67.0098 23.9757 67.0098 20.3038C67.0098 16.6318 69.9131 13.6455 73.4761 13.6455C74.9907 13.6455 76.4401 14.1949 77.5859 15.1614V14.2899C77.5859 13.947 77.8766 13.6703 78.2368 13.6703H79.3478C79.5257 13.6703 79.695 13.7405 79.8208 13.8644C79.9424 13.9883 80.0075 14.1536 79.9988 14.3229L79.9727 14.8268L79.9467 25.8427C79.9467 28.2466 77.4991 31.617 73.5108 31.6459H72.977L72.9726 31.6418ZM73.4761 15.8883C71.2107 15.8883 69.3663 17.8668 69.3663 20.3038C69.3663 22.7407 71.2107 24.7192 73.4761 24.7192C75.7414 24.7192 77.5859 22.7407 77.5859 20.3038C77.5859 17.8668 75.7414 15.8883 73.4761 15.8883Z"
      fill="#030303"
    />
    <path
      d="M65.6002 19.0416C65.1446 16.299 63.0615 14.1264 60.4098 13.6225C60.0279 13.5481 59.633 13.5068 59.2294 13.5068C58.8258 13.5068 58.4309 13.5481 58.049 13.6225C55.3974 14.1264 53.3143 16.299 52.8586 19.0416C52.7978 19.4092 52.7588 19.781 52.7588 20.1651C52.7588 20.5492 52.7978 20.921 52.8586 21.2886C53.3143 24.0312 55.3974 26.2038 58.049 26.7077C58.4309 26.782 58.8258 26.8233 59.2294 26.8233C59.633 26.8233 60.0279 26.782 60.4098 26.7077C63.0615 26.2038 65.1446 24.0312 65.6002 21.2886C65.661 20.921 65.7001 20.5492 65.7001 20.1651C65.7001 19.781 65.661 19.4092 65.6002 19.0416ZM60.4098 24.5764C60.0323 24.692 59.6417 24.7581 59.2294 24.7581C58.8171 24.7581 58.4266 24.692 58.049 24.5764C56.5821 24.1303 55.4408 22.8705 55.0676 21.2844C54.9808 20.9251 54.933 20.5492 54.933 20.161C54.933 19.7727 54.9851 19.3968 55.0676 19.0375C55.4408 17.4514 56.5865 16.1957 58.049 15.7455C58.4266 15.6299 58.8171 15.5638 59.2294 15.5638C59.6417 15.5638 60.0323 15.6299 60.4098 15.7455C61.8767 16.1916 63.0181 17.4514 63.3913 19.0375C63.4781 19.3968 63.5258 19.7727 63.5258 20.161C63.5258 20.5492 63.4737 20.9251 63.3913 21.2844C63.0181 22.8705 61.8724 24.1262 60.4098 24.5764Z"
      fill="#196AFF"
    />
    <path
      d="M61.6868 10.1445L61.4695 11.0216C61.3995 11.3109 61.5596 11.6144 61.8587 11.7067C63.1115 12.1017 64.2532 12.7749 65.2124 13.661C65.4473 13.8791 65.8235 13.8731 66.0581 13.6572L66.7357 13.038C66.9899 12.8068 66.9843 12.4236 66.734 12.191C65.5239 11.0681 64.0751 10.2202 62.4826 9.72597C62.1375 9.61911 61.7678 9.81195 61.6875 10.1486L61.6868 10.1445Z"
      fill="#196AFF"
    />
    <path
      d="M41.6626 26.7696C38.1387 26.7696 35.2744 23.7833 35.2744 20.1114C35.2744 16.4394 38.1387 13.4531 41.6626 13.4531C44.5616 13.4531 46.1326 14.8079 46.9354 15.9396C47.1351 16.2205 47.0613 16.6046 46.7662 16.7988L45.9199 17.3523C45.8071 17.4266 45.6769 17.4596 45.5511 17.4596C45.3471 17.4596 45.1475 17.3688 45.0216 17.2036C44.2665 16.204 43.1381 15.7001 41.6626 15.7001C39.4406 15.7001 37.6353 17.6786 37.6353 20.1155C37.6353 22.5525 39.445 24.5309 41.6626 24.5309C43.5374 24.5309 44.4791 23.5851 45.0216 22.8746C45.1475 22.7094 45.3471 22.6185 45.5467 22.6185C45.6726 22.6185 45.8028 22.6557 45.9156 22.7259L46.7619 23.2794C47.057 23.4735 47.1307 23.8577 46.9311 24.1385C45.6769 25.8857 43.9019 26.7738 41.6583 26.7738L41.6626 26.7696Z"
      fill="#030303"
    />
    <path
      d="M39.4587 29.959L39.676 29.0819C39.746 28.7926 39.5859 28.4891 39.2868 28.3968C38.034 28.0018 36.8923 27.3286 35.9331 26.4425C35.6982 26.2244 35.322 26.2304 35.0874 26.4463L34.4098 27.0656C34.1556 27.2968 34.1612 27.6799 34.4115 27.9126C35.6216 29.0354 37.0705 29.8833 38.6629 30.3775C39.008 30.4844 39.3777 30.2916 39.458 29.955L39.4587 29.959Z"
      fill="#196AFF"
    />
  </svg>
);
