import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import FormsContent from "@/app/components/site/forms/FormsContent";

export default async function LangFormsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar lang={lang} dict={dict.nav} />
      <FormsContent dict={dict.forms} />
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
