import MainPage from "./main/page";
import { AttachAFile, Bookmark, HeartFull } from "@repo/ui/index";

export default function Page() {
  return (
    <div>
      <MainPage />

      <AttachAFile />
      <HeartFull fill="green" stroke="green" />
      <Bookmark stroke="green" />
    </div>
  );
}
