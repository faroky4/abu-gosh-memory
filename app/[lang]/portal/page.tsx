import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import PortalHero from "@/app/components/site/portal/PortalHero";
import PortalGrid from "@/app/components/site/portal/PortalGrid";
import PortalCTA from "@/app/components/site/portal/PortalCTA";

export default async function LangPortalPage({
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
        <PortalHero dict={dict.portal.hero} />
        <PortalGrid dict={dict.portal.grid} lang={lang} />
        <PortalCTA dict={dict.portal.cta} lang={lang} />
      </div>
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
