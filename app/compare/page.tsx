import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import Section from "../components/site/Section";
import ComparePlacesGallery from "../components/site/ComparePlacesGallery";

export default function ComparePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Section
          title="زمان واليوم"
          subtitle="اختار تصنيف، واسحب الشريط لتشوف الفرق بين الصور القديمة والحديثة لنفس المكان."
        >
          <ComparePlacesGallery />
        </Section>
      </div>

      <Footer />
    </main>
  );
}
