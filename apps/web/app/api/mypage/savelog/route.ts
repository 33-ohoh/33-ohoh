import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  // console.log("잘나오나: ", req.url);

  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 1;

  try {
    const resultList = await pb
      .collection("savelogs")
      .getList(Number(page), Number(perPage), {
        sort: "created",
        expand: "logs",
        filters: { isSave: true },
      });
    return NextResponse.json(resultList);
  } catch (error) {
    console.error("에러 발생:", error);
    return NextResponse.error();
  }
}

export async function DELETE(recordId: string) {
  // console.log("📌 삭제: ", recordId);
  try {
    await pb.collection("savelogs").delete(recordId);
    // 상태 업데이트 하기
  } catch (error) {
    console.error("에러 발생:", error);

    return NextResponse.error();
  }
}
