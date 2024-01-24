import {
  titleStyle,
  bodyStyle,
  colors,
  margins,
  radius,
} from "@repo/ui/designToken.stylex";
import QuillEditor from "@repo/ui/quillEditor";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  wrapper: { width: "1185px", margin: "0 auto" },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  saveSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  autoSaveText: {
    color: colors.neutral40,
  },
  tempSaveButton: {
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    border: "none",
    cursor: "pointer",
    borderRadius: "12px",
  },
  editorContainer: {
    marginBottom: "20px",
  },
  settingsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  settingItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  settingItemTitle: {
    width: "100px",
  },
  setttingSetDefault: {
    marginLeft: "110px",
  },
  publishButtons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  publishButton: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  },
});

const Log = () => {
  return (
    <section {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.headerSection)}>
        <h1 {...stylex.props(titleStyle.display3)}>게시글 작성</h1>
        <div {...stylex.props(styles.saveSection)}>
          <p {...stylex.props(titleStyle.subhead1, styles.autoSaveText)}>
            자동 저장 21:09:27
          </p>
          <button {...stylex.props(styles.tempSaveButton)}>
            임시저장 | 50
          </button>
        </div>
      </div>
      <div {...stylex.props(styles.editorContainer)}>
        <QuillEditor />
      </div>
      <div {...stylex.props(styles.settingsSection)}>
        <div {...stylex.props(styles.settingItem)}>
          <span {...stylex.props(styles.settingItemTitle)}>시리즈 설정</span>
          <select name="series" id="series">
            <option>시리즈를 선택하세요.</option>
          </select>
        </div>
        <div {...stylex.props(styles.settingItem)}>
          <span {...stylex.props(styles.settingItemTitle)}>공개범위</span>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">댓글허용</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">외부 공유 허용</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">복사, 저장 허용</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">자동 출처 사용</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">블로그, 카페 공유 허용</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">CCL 사용</label>
        </div>
        <div {...stylex.props(styles.settingItem)}>
          <span {...stylex.props(styles.settingItemTitle)}>발행시간</span>
          <input
            type="checkbox"
            id="commentAccept"
            name="commentAccept"
            checked
          />
          <label htmlFor="commentAccept">현재</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">text</label>
        </div>
        <div {...stylex.props(styles.settingItem, styles.setttingSetDefault)}>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">이 설정을 기본값으로 유지</label>
        </div>
      </div>
      <div {...stylex.props(styles.publishButtons)}>
        <button {...stylex.props(styles.cancelButton)}>취소</button>
        <button {...stylex.props(styles.publishButton)}>등록</button>
      </div>
    </section>
  );
};

export default Log;
