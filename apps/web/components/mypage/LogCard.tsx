import Image from "next/image";
import {
  IconBookmark,
  IconComment,
  IconHeart,
  IconViewer,
} from "../../../../packages/ui/src/svg/IconComponents";

interface LogCardProps {
  id: string;
  title: string;
  thumbnail: string;
  username: string;
  job: string;
  content: string;
  viewer: number;
  like: number;
  comment: number;
}

const LogCard = async ({ log }: { log: LogCardProps }) => {
  const {
    id,
    title,
    thumbnail,
    username,
    job,
    content,
    viewer,
    like,
    comment,
  } = log || {};
  return (
    <li
      key={id + title}
      className="w-[320px] h-[302px] rounded-[10px] overflow-hidden border border-solid border-neutral20"
    >
      <div className="bg-gray-100 h-[194px] p-[16px]">
        <div className="flex items-center gap-[5px]">
          <Image
            src="/default-image.png"
            alt={"img"}
            width={42}
            height={42}
            className="rounded-full"
          />
          <div className="flex flex-col gap-[5px]">
            <strong className="text-[14px]">{username}</strong>
            <span className="text-[10px]">{job}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-white h-[108px] py-[15px] px-[20px]">
        <div className="flex">
          <h4 className="text-[18px] font-bold mb-extraSmall5">{title}</h4>
          <button>
            <IconBookmark fill="#000000" />
          </button>
        </div>
        <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap mb-extraSmall4">
          {content}
        </p>
        <div className="flex text-[10px] text-neutral50 gap-[5px] pb-[10px]">
          <div className="flex gap-[2px] items-center">
            <IconViewer />
            <span>{viewer}</span>
          </div>
          <div className="flex gap-[2px] items-center">
            <IconHeart fill="#EE5C5C" />
            <span>{like}</span>
          </div>
          <div className="flex gap-[2px] items-center">
            <IconComment />
            <span>{comment}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LogCard;
