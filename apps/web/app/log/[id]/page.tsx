"use client";
import PocketBase from "pocketbase";
// import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const LogPage = ({ params }: { params: LogParams }) => {
  //   const pathname = usePathname();
  const [log, setLog] = useState<LogResponse | null>(null);
  const logId = params.id;

  useEffect(() => {
    const fetchLog = async () => {
      if (!logId) return;

      try {
        const record: LogResponse = await pb.collection("logs").getOne(logId, {
          expand: "relField1,relField2.subRelField",
          requestKey: null,
        });
        setLog(record);
      } catch (error) {
        console.error("Error fetching log:", error);
      }
    };

    fetchLog();
  }, [logId]);

  if (!log) {
    return <p>Loading...</p>;
  }

  //   console.log(pathname);
  //   console.log({ params });

  return (
    <div>
      <h1>{log.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: log.content }} />
    </div>
  );
};

export default LogPage;
