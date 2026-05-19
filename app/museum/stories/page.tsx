import type { Metadata } from "next";
import MuseumStoriesPage from "@/app/components/site/museum/stories/MuseumStoriesPage";

export const metadata: Metadata = {
  title: "أصوات من أبو غوش — متحف أبو غوش الرقمي",
  description: "مقابلات وقصص تحفظ ذاكرة بلدة أبو غوش",
};

export default function MuseumStoriesRoute() {
  return <MuseumStoriesPage />;
}
