import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import NewsHero from "@/app/components/site/news/NewsHero";
import NewsFeatured from "@/app/components/site/news/NewsFeatured";
import NewsGrid from "@/app/components/site/news/NewsGrid";

export default async function LangNewsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar lang={lang} dict={dict.nav} />
      <div className="flex-1">
        <NewsHero dict={dict.news.hero} />
        <NewsFeatured dict={dict.news.featured} />
        <NewsGrid dict={dict.news.grid} lang={lang} />
      </div>
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
