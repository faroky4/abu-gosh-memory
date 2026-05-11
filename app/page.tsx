import SchoolFooter from "./components/site/school-home/SchoolFooter";
import SchoolNavbar from "./components/site/school-home/SchoolNavbar";
import SchoolHero from "./components/site/school-home/SchoolHero";
import SchoolStats from "./components/site/school-home/SchoolStats";
import AboutSchool from "./components/site/school-home/AboutSchool";
import SchoolNews from "./components/site/school-home/SchoolNews";
import StudentImpact from "./components/site/school-home/StudentImpact";
import HeritageCTA from "./components/site/school-home/HeritageCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />

      <div className="flex-1">
        <SchoolHero />
        <SchoolStats />
        <AboutSchool />
        <SchoolNews />
        <StudentImpact />
        <HeritageCTA />
      </div>

      <SchoolFooter />
    </main>
  );
}
