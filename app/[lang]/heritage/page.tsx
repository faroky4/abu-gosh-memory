import { getDictionary, type Locale } from "@/lib/i18n";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";
import Hero from "@/app/components/site/Hero";
import Section from "@/app/components/site/Section";
import FeatureCards from "@/app/components/site/FeatureCards";
import StoriesPreview from "@/app/components/site/StoriesPreview";
import BeforeAfterSlider from "@/app/components/site/BeforeAfterSlider";
import InteractiveMap from "@/app/components/site/InteractiveMap";
import FeaturedVideos from "@/app/components/site/FeaturedVideos";

export default async function LangHeritagePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const h = dict.heritage;
  const basePath = `/${lang}/heritage`;

  return (
    <main className="min-h-screen flex flex-col">
      <Header dict={h.header} basePath={basePath} lang={lang} />

      <div className="flex-1">
        <Hero dict={h.hero} basePath={basePath} />

        <Section
          id="past"
          title={h.sections.past.title}
          subtitle={h.sections.past.subtitle}
        >
          <FeatureCards cards={h.featureCards} />
        </Section>

        <Section
          id="present"
          title={h.sections.present.title}
          subtitle={h.sections.present.subtitle}
          className="border-t bg-slate-50/60"
        >
          <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 p-4 text-xs sm:text-sm text-amber-900" />
        </Section>

        <Section
          id="compare"
          title={h.sections.compare.title}
          subtitle={h.sections.compare.subtitle}
          className="border-t bg-slate-50/60"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-sm font-semibold mb-3">{h.sections.compare.example1Label}</p>
              <BeforeAfterSlider
                beforeSrc="/images/old-caravan.jpg"
                afterSrc="/images/new-caravan.jpg"
                alt="מקום לפני ואחרי"
                initial={55}
              />
            </div>
            <div className="rounded-xl bg-white border border-slate-100 p-4 shadow-sm">
              <p className="text-sm font-semibold mb-3">{h.sections.compare.example2Label}</p>
              <BeforeAfterSlider
                beforeSrc="/images/old-ein.jpg"
                afterSrc="/images/new-ein.jpg"
                alt="מקום לפני ואחרי"
                initial={40}
              />
            </div>
          </div>
        </Section>

        <Section
          id="stories"
          title={h.sections.stories.title}
          subtitle={h.sections.stories.subtitle}
        >
          <StoriesPreview readMoreLabel={h.readMoreLabel} />
        </Section>

        <Section
          id="videos"
          title={h.sections.videos.title}
          subtitle={h.sections.videos.subtitle}
          className="border-t"
        >
          <FeaturedVideos />
        </Section>

        <Section
          id="map"
          title={h.sections.map.title}
          subtitle={h.sections.map.subtitle}
          className="border-t bg-slate-50/60"
        >
          <InteractiveMap />
        </Section>

        <Section
          id="future"
          title={h.sections.future.title}
          subtitle={h.sections.future.subtitle}
        >
          <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/40 p-4 text-xs sm:text-sm text-emerald-900">
            {h.sections.future.placeholder}
          </div>
        </Section>
      </div>

      <Footer dict={h.footer} />
    </main>
  );
}
