import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import PortalHero from "@/app/components/site/portal/PortalHero";
import PortalGrid from "@/app/components/site/portal/PortalGrid";
import PortalCTA from "@/app/components/site/portal/PortalCTA";

export const metadata = {
  title: "البوابة الإلكترونية — مدرسة أبو غوش الثانوية",
  description: "منصة مركزية للوصول إلى خدمات المدرسة، الأخبار، المشاريع، والروابط المهمة.",
};

export default function PortalPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />
      <div className="flex-1">
        <PortalHero />
        <PortalGrid />
        <PortalCTA />
      </div>
      <SchoolFooter />
    </main>
  );
}
