import { Pencil, Plus } from "@repo/ui/index";

interface LogButtonProps {
  icon: string;
  text: string;
}

const LogButton = ({ icon, text }: LogButtonProps) => {
  return (
    <>
      <button
        type="button"
        className="bg-primary5 text-primary80 border border-solid border-primary80 rounded-radius5 flex items-center mx-auto gap-[7px] w-full justify-center py-[12px]"
      >
        {icon === "edit" ? (
          <Pencil width={22} height={22} fill={"#4C8BFF"} />
        ) : (
          <Plus width={22} height={22} fill={"#4C8BFF"} />
        )}

        <p className="font-bold">{text}</p>
      </button>
    </>
  );
};

export default LogButton;
