"use client";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Chat } from "@repo/ui/index";

const pb = new PocketBase("http://13.209.16.46:8090");

type LogParams = {
  id: string;
};

interface LogResponse {
  collectionId: string;
  collectionName: string;
  commentCount: number;
  content: string;
  created: string;
  hitCount: number;
  id: string;
  isPublic: boolean;
  isQuestion: boolean;
  isTemporary: boolean;
  likeCount: number;
  series: string;
  tags: string[];
  thumbnail: string;
  title: string;
  updated: string;
  user: string;
}

interface UserProfile {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
  introduction: string;
}

const LogPage = ({ params }: { params: LogParams }) => {
  const [log, setLog] = useState<LogResponse | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const logId = params.id;

  useEffect(() => {
    const fetchLog = async () => {
      if (!logId) return;

      try {
        const record: LogResponse = await pb.collection("logs").getOne(logId, {
          expand: "user",
          requestKey: null,
        });
        setLog(record);
        fetchUser(record.user);
      } catch (error) {
        console.error("Error fetching log:", error);
      }
    };

    const fetchUser = async (userId: string) => {
      if (!userId) return;

      try {
        const userRecord = await pb
          .collection("users")
          .getOne(userId, { requestKey: null });
        const userProfile: UserProfile = {
          id: userRecord.id,
          username: userRecord.username,
          email: userRecord.email,
          name: userRecord.name,
          avatar: userRecord.avatar,
          introduction: userRecord.introduction,
        };
        setUserProfile(userProfile);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchLog();
  }, [logId]);

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    return new Date(dateString)
      .toLocaleDateString("ko-KR", options)
      .replace(/\. /g, ".")
      .slice(0, -1);
  };

  if (!log) {
    return <p>Loading...</p>;
  }

  const imageUrl = userProfile?.avatar
    ? `http://13.209.16.46:8090/api/files/_pb_users_auth_/${userProfile.id}/${userProfile.avatar}`
    : null;

  console.log(log);

  return (
    <div className="mt-regular1 mb-extraLarge">
      <section className="w-[1180px] mx-auto">
        <p className="body1R text-neutral30 mb-extraSmall1">
          &lt;시리즈&gt; {log.series}
        </p>
        <h1 className="display3 text-neutral80 mb-extraSmall4">{log.title}</h1>
        <div className="flex gap-[25px] items-center mb-extraSmall4">
          <div className="flex items-center gap-[10px]">
            <div className="w-[28px] h-[28px] bg-neutral10 rounded-full overflow-hidden">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="User Profile Image"
                  width={28}
                  height={28}
                  className="user-avatar"
                />
              )}
            </div>
            <span>{userProfile?.username}</span>
          </div>
          <p className="body1R text-neutral50">{formatDate(log.created)}</p>
        </div>
        <div className="w-full flex justify-end border-b mb-regular1">
          <div className="flex gap-[10px] mb-extraSmall4">
            <div className="flex gap-[5px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7C8.63637 7 4.87138 8.95139 3.32975 11.792C3.09002 12.2338 3.09002 12.7662 3.32975 13.208C4.87138 16.0486 8.63637 18 12 18C15.3636 18 19.1286 16.0486 20.6702 13.208C20.91 12.7662 20.91 12.2338 20.6702 11.792C19.1286 8.95139 15.3636 7 12 7ZM12 16.1667C9.99273 16.1667 8.36364 14.524 8.36364 12.5C8.36364 10.476 9.99273 8.83333 12 8.83333C14.0073 8.83333 15.6364 10.476 15.6364 12.5C15.6364 14.524 14.0073 16.1667 12 16.1667ZM12 10.3C10.7927 10.3 9.81818 11.2827 9.81818 12.5C9.81818 13.7173 10.7927 14.7 12 14.7C13.2073 14.7 14.1818 13.7173 14.1818 12.5C14.1818 11.2827 13.2073 10.3 12 10.3Z"
                  fill="#333333"
                />
              </svg>
              <span>{log.hitCount}</span>
            </div>
            <div className="flex gap-[5px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1911 18.2866L11.19 18.2856C8.85704 16.236 6.98265 14.5876 5.68245 13.0475C4.39006 11.5167 3.75 10.1894 3.75 8.79564C3.75 6.54651 5.56964 4.75 7.95 4.75C9.12419 4.75 10.2645 5.21434 11.0965 5.97164C11.6057 6.43514 12.3943 6.43514 12.9035 5.97164C13.7355 5.21434 14.8758 4.75 16.05 4.75C18.4304 4.75 20.25 6.54651 20.25 8.79564C20.25 10.1894 19.6099 11.5168 18.3174 13.0488C17.0172 14.5899 15.143 16.2404 12.8102 18.2941C12.8099 18.2944 12.8097 18.2946 12.8094 18.2948L12.0019 19.0016L11.1911 18.2866ZM12.1666 19.1469L12.1662 19.1466L12.1666 19.1469Z"
                  fill="#EE5C5C"
                  stroke="#EE5C5C"
                  strokeWidth="1.5"
                />
              </svg>
              <span>{log.likeCount}</span>
            </div>
            <div className="flex gap-[5px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9606 16.2401L17.4021 15.8422C17.2649 16.0347 17.2366 16.2843 17.3272 16.5028L17.9606 16.2401ZM16.2352 17.9642L16.4772 17.3226C16.2635 17.242 16.0238 17.2731 15.8376 17.4053L16.2352 17.9642ZM19.128 19.0557L18.8859 19.6973C19.1418 19.7938 19.4305 19.7291 19.6207 19.5327C19.8109 19.3363 19.8662 19.0457 19.7615 18.7931L19.128 19.0557ZM18.6286 12C18.6286 13.4333 18.1744 14.7585 17.4021 15.8422L18.519 16.6381C19.4514 15.3297 20 13.7279 20 12H18.6286ZM12 5.37143C15.6609 5.37143 18.6286 8.33915 18.6286 12H20C20 7.58172 16.4183 4 12 4V5.37143ZM5.37143 12C5.37143 8.33915 8.33915 5.37143 12 5.37143V4C7.58172 4 4 7.58172 4 12H5.37143ZM12 18.6286C8.33915 18.6286 5.37143 15.6609 5.37143 12H4C4 16.4183 7.58172 20 12 20V18.6286ZM15.8376 17.4053C14.7547 18.1757 13.4313 18.6286 12 18.6286V20C13.7254 20 15.3253 19.453 16.6326 18.5229L15.8376 17.4053ZM19.3701 18.4142L16.4772 17.3226L15.9931 18.6057L18.8859 19.6973L19.3701 18.4142ZM17.3272 16.5028L18.4946 19.3184L19.7615 18.7931L18.594 15.9775L17.3272 16.5028Z"
                  fill="#333333"
                />
              </svg>
              <span>{log.commentCount}</span>
            </div>
          </div>
        </div>
        <article
          className="w-[1025px] mx-auto mb-extraLarge"
          dangerouslySetInnerHTML={{ __html: log.content }}
        />
        <ul className="mb-[100px] flex">
          {log.tags.map((tag, index) => (
            <li key={index} className="mr-extraSmall4 mb-extraSmall4">
              <div
                className={`px-[22px] py-[12px] rounded-full body2M border border-primary90 text-primary90`}
              >
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-neutral5 py-[69px] mb-mediun">
        <div className="flex flex-col items-center gap-[25px]">
          <div className="w-[160px] h-[160px] bg-neutral30 rounded-full overflow-hidden">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="User Profile Image"
                width={160}
                height={160}
                className="user-avatar"
              />
            )}
          </div>
          <span className="display4">{userProfile?.username}</span>
          <div className="flex justify-center gap-[15px]">
            <button className="w-[210px] h-[46px] bg-primary90 text-white subhead1 rounded-radius5">
              팔로우
            </button>
            <button className="w-[210px] h-[46px] bg-primary90 text-white subhead1 rounded-radius5">
              작업 제안하기
            </button>
          </div>
        </div>
      </section>
      <section className="w-[1180px] mx-auto">
        <div className="border flex flex-col items-center gap-[4px] rounded-radius15 p-[25px] mb-small1">
          <textarea
            name=""
            id=""
            placeholder="댓글을 입력해주세요."
            className="w-[1110px] h-[100px] focus:outline-none resize-none body1R"
          />
          <div className="w-[1110px] flex justify-end">
            <button className="px-[20px] py-[8px] border rounded-full border-primary90 text-primary90">
              등록하기
            </button>
          </div>
        </div>
        <div className="border-b pb-[20px] mb-extraSmall1">
          <span className="display4">댓글(2)</span>
        </div>
        <ul className="flex flex-col gap-[25px]">
          <li className="pl-[5px] pr-[25px]">
            <div className="flex flex-col gap-[5px] w-full">
              <div className="flex justify-between">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] bg-neutral40 rounded-full"></div>
                  <span className="body1M">kimsgraphic</span>
                </div>
                <div className="flex flex-col justify-end">
                  <span className="body4M text-neutral30">2023.02.02</span>
                  <button className="ml-auto body4M text-neutral30">
                    삭제
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="body1M">
                  저도 하고 싶은데 어떻게 신청하면 되나요?
                </span>
                <button className="body4M text-neutral50 px-[20px] py-[8px] border rounded-full border-neutral50">
                  답글달기
                </button>
              </div>
            </div>
          </li>
          <li className="flex gap-[5px] pl-[5px] pr-[25px]">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0V20.27H0.47619V20.7751H18.3742L16.1566 23.1349C15.9707 23.3328 15.9707 23.6537 16.1566 23.8516C16.3426 24.0495 16.6441 24.0495 16.8301 23.8516L19.8605 20.6266C20.0465 20.4287 20.0465 20.1079 19.8605 19.91L16.8301 16.6851C16.6441 16.4872 16.3426 16.4872 16.1566 16.6851C15.9707 16.883 15.9707 17.2038 16.1566 17.4017L18.3742 19.7616H0.952381V0H0Z"
                fill="#196AFF"
              />
            </svg>
            <div className="flex flex-col gap-[5px] w-full">
              <div className="flex justify-between">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[36px] h-[36px] bg-neutral40 rounded-full"></div>
                  <span className="body1M">kimsgraphic</span>
                </div>
                <div className="flex flex-col justify-end">
                  <span className="body4M text-neutral30">2023.02.02</span>
                  <button className="ml-auto body4M text-neutral30">
                    삭제
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="body1M">
                  저도 하고 싶은데 어떻게 신청하면 되나요?
                </span>
                <button className="body4M text-neutral50 px-[20px] py-[8px] border rounded-full border-neutral50">
                  답글달기
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LogPage;
