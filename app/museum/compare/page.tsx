import type { Metadata } from "next";
import MuseumComparePage from "@/app/components/site/museum/compare/MuseumComparePage";

export const metadata: Metadata = {
  title: "زمان واليوم — متحف أبو غوش الرقمي",
  description: "مقارنة بصرية بين ماضي وحاضر أبو غوش",
};

export default function MuseumCompareRoute() {
  return <MuseumComparePage />;
}
