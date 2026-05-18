import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import NewsHero from "@/app/components/site/news/NewsHero";
import NewsFeatured from "@/app/components/site/news/NewsFeatured";
import NewsGrid from "@/app/components/site/news/NewsGrid";

export const metadata = {
  title: "أخبار المدرسة — مدرسة أبو غوش الثانوية",
  description: "آخر النشاطات، المبادرات، والمشاريع داخل مدرسة أبو غوش الثانوية.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />
      <div className="flex-1">
        <NewsHero />
        <NewsFeatured />
        <NewsGrid />
      </div>
      <SchoolFooter />
    </main>
  );
}
