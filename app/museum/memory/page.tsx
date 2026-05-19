import type { Metadata } from "next";
import MuseumMemoryPage from "@/app/components/site/museum/memory/MuseumMemoryPage";

export const metadata: Metadata = {
  title: "ذاكرة المدرسة — متحف أبو غوش الرقمي",
  description: "صور، لحظات، وذكريات من أجيال مدرسة أبو غوش",
};

export default function MuseumMemoryRoute() {
  return <MuseumMemoryPage />;
}
