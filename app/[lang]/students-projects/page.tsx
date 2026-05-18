import { getDictionary, type Locale } from "@/lib/i18n";
import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import ProjectsHero from "@/app/components/site/students-projects/ProjectsHero";
import ProjectsGrid from "@/app/components/site/students-projects/ProjectsGrid";

export default async function LangStudentsProjectsPage({
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
        <ProjectsHero dict={dict.studentsProjects.hero} />
        <ProjectsGrid dict={dict.studentsProjects} lang={lang} />
      </div>
      <SchoolFooter lang={lang} navDict={dict.nav} footerDict={dict.footer} />
    </main>
  );
}
