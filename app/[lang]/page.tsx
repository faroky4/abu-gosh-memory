import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import SchoolHero from "@/app/components/site/school-home/SchoolHero";
import SchoolStats from "@/app/components/site/school-home/SchoolStats";
import SchoolPulse from "@/app/components/site/school-home/SchoolPulse";
import AboutSchool from "@/app/components/site/school-home/AboutSchool";
import StudentImpact from "@/app/components/site/school-home/StudentImpact";
import HeritageCTA from "@/app/components/site/school-home/HeritageCTA";

export default async function LangHomePage({
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
        <SchoolHero dict={dict.hero} lang={lang} />
        <SchoolStats dict={dict.stats} />
        <SchoolPulse dict={dict.pulse} lang={lang} />
        <AboutSchool dict={dict.about} />
        <StudentImpact dict={dict.impact} />
        <HeritageCTA dict={dict.heritageCta} lang={lang} />
      </div>
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
