import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

// /api/collections/logs/records/:id

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  console.log("히히: ", searchParams);
  // console.log("잘나오나: ", req.url);

  // const page = searchParams.get("page") || 1;
  // const perPage = searchParams.get("perPage") || 1;

  try {
    const record = await pb.collection("logs").getOne("eeea9l5xge8gyyv", {
      expand: "relField1,relField2.subRelField",
    });

    return NextResponse.json(record);
  } catch (error) {
    console.error("최근 본 로그 페이지 에러 발생:", error);
    return NextResponse.error();
  }
}
