import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

export async function GET(req: Request) {
  let params = new URL(req.url).searchParams.get("page");
  const pageNum = Number(params) as number;

  try {
    const records = await pb.collection("replies").getList(pageNum, 4, {
      expand: "log, user",
    });
    return NextResponse.json(records);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "데이터를 가져오는데 실패했습니다." });
  }
}
