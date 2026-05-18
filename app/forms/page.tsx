import SchoolNavbar from "@/app/components/site/school-home/SchoolNavbar";
import SchoolFooter from "@/app/components/site/school-home/SchoolFooter";
import FormsContent from "@/app/components/site/forms/FormsContent";

export const metadata = {
  title: "نماذج وملفات — مدرسة أبو غوش الثانوية",
  description: "مركز للوصول إلى النماذج المدرسية، الملفات المهمة، وروابط المشاركة في مشروع حكاية أبو غوش.",
};

export default function FormsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SchoolNavbar />
      <FormsContent />
      <SchoolFooter />
    </main>
  );
}
