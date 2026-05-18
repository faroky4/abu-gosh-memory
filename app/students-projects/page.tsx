import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import ProjectsHero from "@/app/components/site/students-projects/ProjectsHero";
import ProjectsGrid from "@/app/components/site/students-projects/ProjectsGrid";

export const metadata = {
  title: "مشاريع الطلاب — مدرسة أبو غوش الثانوية",
  description: "أعمال بحثية، توثيقية، وتكنولوجية ينفّذها طلاب مدرسة أبو غوش الثانوية.",
};

export default function StudentsProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />
      <div className="flex-1">
        <ProjectsHero />
        <ProjectsGrid />
      </div>
      <SchoolFooter />
    </main>
  );
}
