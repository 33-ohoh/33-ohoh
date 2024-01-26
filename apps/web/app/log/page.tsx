import React from "react";
import QuillEditor from "@repo/ui/quillEditor";

const Page = () => {
  return (
    <section>
      <div>
        <h1>게시글 작성</h1>
        <div>
          <p>자동 저장 21:10:27</p>
          <button>임시저장 | 50</button>
        </div>
      </div>
      <div>
        <QuillEditor />
      </div>
      <div>
        <div>
          <span>시리즈 설정</span>
          <select name="series" id="series">
            <option>시리즈를 선택하세요.</option>
          </select>
        </div>
        <div>
          <span>공개범위</span>
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
        <div>
          <span>발행시간</span>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">현재</label>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">text</label>
        </div>
        <div>
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">이 설정을 기본값으로 유지</label>
        </div>
      </div>
      <div>
        <button>취소</button>
        <button>등록</button>
      </div>
    </section>
  );
};

export default Page;
