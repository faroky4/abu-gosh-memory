import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import ResourcesHero from "@/app/components/site/resources/ResourcesHero";
import ResourcesSections from "@/app/components/site/resources/ResourcesSections";

export default async function LangResourcesPage({
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
        <ResourcesHero dict={dict.resources.hero} />
        <ResourcesSections dict={dict.resources} lang={lang} />
      </div>
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
