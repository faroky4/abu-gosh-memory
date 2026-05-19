import type { Metadata } from "next";
import MuseumHero from "@/app/components/site/museum/MuseumHero";
import MuseumGrid from "@/app/components/site/museum/MuseumGrid";
import MuseumFooter from "@/app/components/site/museum/MuseumFooter";

export const metadata: Metadata = {
  title: "متحف أبو غوش الرقمي",
  description: "رحلة تفاعلية بين الماضي، الحاضر، والمستقبل.",
};

export default function MuseumPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-stone-950 flex flex-col">
      <MuseumHero />
      <MuseumGrid />
      <MuseumFooter />
    </main>
  );
}
