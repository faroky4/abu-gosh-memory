import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import Hero from "./components/site/Hero";
import Section from "./components/site/Section";
import FeatureCards from "./components/site/FeatureCards";
import StoriesPreview from "./components/site/StoriesPreview";
import BeforeAfterSlider from "./components/site/BeforeAfterSlider";
import InteractiveMap from "./components/site/InteractiveMap";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <Hero />

        <Section
          id="past"
          title="أبو غوش زمان"
          subtitle="نعرض صورًا ووثائق من أرشيف العائلات ونروي كيف كانت البيوت، المدرسة، الأعراس، والعمل في الماضي."
        >
          <FeatureCards />
        </Section>

        <Section
          id="present"
          title="أبو غوش اليوم"
          subtitle="صور حديثة التقطها الطلاب للشوارع، المدرسة، البيوت الجديدة، والحياة اليومية في البلد."
          className="border-t bg-slate-50/60"
        >
          <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 p-4 text-xs sm:text-sm text-amber-900">

          </div>
        </Section>
        <Section
          id="compare"
          title="زمان واليوم"
          subtitle="اسحب الشريط وشوف نفس المكان كيف كان زمان وكيف صار اليوم."
          className="border-t bg-slate-50/60"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div id="caravan" className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-sm font-semibold mb-3">مثال: مطعم كروان</p>
              <BeforeAfterSlider
                beforeSrc="/images/old-caravan.jpg"
                afterSrc="/images/new-caravan.jpg"
                alt="مقارنة مكان 1"
                initial={55}
              />
            </div>

            <div id="spring" className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-sm font-semibold mb-3">مثال: عين الماء</p>
              <BeforeAfterSlider
                beforeSrc="/images/old-ein.jpg"
                afterSrc="/images/new-ein.jpg"
                alt="مقارنة مكان 2"
                initial={40}
              />
            </div>
          </div>
        </Section>
        <Section
          id="stories"
          title="قصص أهل البلد"
          subtitle="مقابلات وروايات من كبار السن عن الطفولة، العمل، الأعياد، والتغييرات بين زمان واليوم."
        >
          <StoriesPreview />
        </Section>

        <Section
          id="map"
          title="الخريطة التفاعلية"
          subtitle="خريطة تقريبية لأبو غوش مع نقاط تمثل أماكن مهمة في حياة أهل البلد."
          className="border-t bg-slate-50/60"
        >
          <InteractiveMap />
        </Section>

        <Section
          id="future"
          title="أبو غوش بعد ٢٠ سنة"
          subtitle="جزء لكتابات ورسومات الطلاب عن كيف يتخيلون مستقبل البلد."
        >
          <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/40 p-4 text-xs sm:text-sm text-emerald-900">
            هنا تقدروا تضيفوا نصوص/رسومات/فيديوهات قصيرة لطلاب يحكوا عن رؤيتهم
            للمستقبل.
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
