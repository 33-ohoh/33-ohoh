import Modal from "@repo/ui/modal";

const SaveLogkModal = ({ isOpenModal, handleCancle, handleDelete }: any) => {
  return (
    <Modal className={`${isOpenModal ? "block" : "hidden"} z-50`}>
      <div className="flex flex-col items-center justify-center h-[162px]">
        <h3 className="font-semibold text-[18px] mb-extraSmall5">
          저장로그 삭제
        </h3>
        <p className="text-[16px]">
          이 로그를 내 저장로그에서 삭제 하시겠습니까?
        </p>
      </div>
      <div className="flex text-center w-full font-semibold">
        <button
          onClick={handleCancle}
          type="button"
          className="ui-bg-primary10 text-neutral-900 w-[50%] py-[18px]"
        >
          취소
        </button>
        <button
          onClick={handleDelete}
          type="submit"
          className="ui-bg-primary90 text-primary5 w-[50%] py-[18px]"
        >
          확인
        </button>
      </div>
    </Modal>
  );
};

export default SaveLogkModal;
