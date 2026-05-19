import type { Metadata } from "next";
import MuseumFuturePage from "@/app/components/site/museum/future/MuseumFuturePage";

export const metadata: Metadata = {
  title: "جيل المستقبل — متحف أبو غوش الرقمي",
  description: "كيف يبني طلاب أبو غوش الجيل القادم من المعرفة والتكنولوجيا",
};

export default function MuseumFutureRoute() {
  return <MuseumFuturePage />;
}
