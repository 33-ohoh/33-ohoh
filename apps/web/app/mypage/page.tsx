"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { SubPageType } from "../../types/mypageConfigure";
import MyLogPage from "./mylog/page";
import SaveLogPage from "./savelog/page";
import RecentLogPage from "./recentlog/page";
import RepliesPage from "./replies/page";

const Page = () => {
  const router = useRouter();
  const pageNum = useSearchParams().get("page");
  useEffect(() => {
    if (!pageNum) return router.push("mypage?page=1");
  }, [pageNum]);

  const [mainContent, setMainContent] = useState(<MyLogPage />);

  const pathname = usePathname();

  const getSubPageType = (pathname: string) => {
    if (pathname.includes("/")) {
      return SubPageType.MY_LOG;
    } else if (pathname.includes("savelog")) {
      return SubPageType.SAVE_LOG;
    } else if (pathname.includes("recentlog")) {
      return SubPageType.RECENT_LOG;
    } else if (pathname.includes("replies")) {
      return SubPageType.MY_COMMENTS;
    } else {
      return SubPageType.NONE;
    }
  };

  const pageType = getSubPageType(pathname);

  useEffect(() => {
    if (!pageNum) return router.push("mypage?page=1");

    switch (pageType) {
      case SubPageType.MY_LOG:
        setMainContent(<MyLogPage />);
        break;
      case SubPageType.SAVE_LOG:
        setMainContent(<SaveLogPage />);
        break;
      case SubPageType.RECENT_LOG:
        setMainContent(<RecentLogPage />);
        break;
      case SubPageType.MY_COMMENTS:
        setMainContent(<RepliesPage />);
        break;
      case SubPageType.NONE:
        setMainContent(<></>);
        break;
      default:
        <MyLogPage />;
    }
  }, [pageNum]);

  return (
    <div>
      <main>{mainContent}</main>
    </div>
  );
};

export default Page;
