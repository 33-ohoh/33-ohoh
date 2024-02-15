export const PATTERNS = {
  /**
   * 이메일 형식의 문자열을 검사
   * - 허용된 형식: example@example.com
   */
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  /**
   * 암호 형식의 문자열을 검사
   * - 영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자
   */
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d|.*[\W_])[A-Za-z\d\W_]{10,16}$/,
};
