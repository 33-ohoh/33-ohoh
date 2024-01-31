import Link from "next/link";
import Image from "next/image";
import { ButtonEdit } from "../../../../packages/ui/src/svg/ProviderIcon";

interface ProfileBoxProps {
  username: string;
  profileImage: string;
  follow: number;
  follower: number;
}

const ProfileBox = ({
  username,
  profileImage,
  follow,
  follower,
}: ProfileBoxProps) => {
  return (
    <div className="w-[300px] text-center mb-extraSmall2">
      <div className="mb-extraSmall3 overflow-hidden">
        <Image
          src={profileImage}
          alt=""
          width={180}
          height={180}
          className="bg-primary10 rounded-full mx-auto"
        />
      </div>
      <p className="font-bold mb-small4">{username}</p>

      <div className="flex items-center relative">
        <Link
          href="/edit-mypage"
          className="relative w-full bg-primary100 text-white rounded-radius5 block mb-extraSmall3 py-[13px] text-[14px] font-bold"
        >
          <div className="absolute top-2 left-20">
            <ButtonEdit width={22} height={22} fill="#ffffff" />
          </div>
          내 프로필 편집
        </Link>
      </div>

      <div className="flex bg-primary10 text-primary90 text-center items-center box-border rounded-radius5 py-[10px] font-medium">
        <div className="flex-grow">
          <p className="mb-extraSmall5">팔로우</p>
          <span>{follow}</span>
        </div>
        <div className="w-[1px] h-[56px] bg-primary80"></div>
        <div className="flex-grow">
          <p className="mb-extraSmall5">팔로워</p>
          <span>{follower}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
