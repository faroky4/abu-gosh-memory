import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import ResourcesHero from "@/app/components/site/resources/ResourcesHero";
import ResourcesSections from "@/app/components/site/resources/ResourcesSections";

export const metadata = {
  title: "روابط تعليمية — مدرسة أبو غوش الثانوية",
  description: "منصات وأدوات تساعد الطلاب في التعلم، البحث، والتطوير.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />
      <div className="flex-1">
        <ResourcesHero />
        <ResourcesSections />
      </div>
      <SchoolFooter />
    </main>
  );
}
