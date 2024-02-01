import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).send("URL not provided");
  }

  const resultList = await pb.collection("logs").getFullList({
    sort: "created",
    expand: "user",
  });
  return NextResponse.json(resultList);
}
