import SchoolFooter from "./components/site/school-home/SchoolFooter";
import SchoolNavbar from "./components/site/school-home/SchoolNavbar";
import SchoolHero from "./components/site/school-home/SchoolHero";
import SchoolStats from "./components/site/school-home/SchoolStats";
import AboutSchool from "./components/site/school-home/AboutSchool";
import SchoolPulse from "./components/site/school-home/SchoolPulse";
import StudentImpact from "./components/site/school-home/StudentImpact";
import HeritageCTA from "./components/site/school-home/HeritageCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />

      <div className="flex-1">
        <SchoolHero />
        <SchoolStats />
        <SchoolPulse />
        <AboutSchool />
        <StudentImpact />
        <HeritageCTA />
      </div>

      <SchoolFooter />
    </main>
  );
}
