import type { Metadata } from "next";
import MuseumMapPage from "@/app/components/site/museum/map/MuseumMapPage";

export const metadata: Metadata = {
  title: "اكتشف أبو غوش — متحف أبو غوش الرقمي",
  description: "خريطة تفاعلية لمعالم بلدة أبو غوش",
};

export default function MuseumMapRoute() {
  return <MuseumMapPage />;
}
