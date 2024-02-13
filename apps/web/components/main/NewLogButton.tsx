import { Plus } from "@repo/ui/index";
import { useRouter } from "next/navigation";

const NewLogButton = () => {
  const router = useRouter();

  // 게시물 클릭 시 상세 페이지로 이동
  const goToNewLogPage = () => {
    router.push(`/log`);
  };

  return (
    <button
      className="flex justify-center items-center w-[180px] h-[50px] bg-primary90 text-white rounded-radius5"
      onClick={goToNewLogPage}
    >
      <Plus stroke="white" />새 로그 작성
    </button>
  );
};

export default NewLogButton;
