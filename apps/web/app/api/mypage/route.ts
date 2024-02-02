import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 0;
  const perPage = searchParams.get("perPage") || 0;

  try {
    const resultList = await pb
      .collection("logs")
      .getList(Number(page), Number(perPage), {
        sort: "created",
        expand: "user",
      });
    return NextResponse.json(resultList);
  } catch (error) {
    console.error("에러 발생");
  }
}
